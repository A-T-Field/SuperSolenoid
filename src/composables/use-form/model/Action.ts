/*
 * @Author: maggot-code
 * @Date: 2022-01-10 15:26:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-11 18:27:31
 * @Description: file content
 */
import type { WatchStopHandle } from 'vue';
import type { GatherFields } from '../types/share';
import type { ActionRaw, ActionsType } from '../types/schema';
import type { IReaction } from '../types/actions';

import { reactive, watchEffect } from 'vue';
import { isArray, isDataField, shallowCompile, map } from '../utils';
import { Form } from '../model/Form';

class Action {
    private reactionWatch: WatchStopHandle;
    protected form!: Form;
    protected field!: GatherFields;
    protected reaction = reactive<Array<IReaction>>([]);

    constructor(actions: ActionsType, form: Form, field: GatherFields) {
        this.initialization(form, field);
        this.makeReaction(actions);
        this.reactionWatch = watchEffect(() => {
            this.reaction.map(({ async, depend, when, url, method }) => {
                if (async) {
                    if (isDataField(this.field)) {
                        this.field.value = "";
                    }
                    depend.forEach(deps => {
                        this.form.requestSend({
                            url,
                            method,
                            params: { code: deps.value }
                        }).then(response => {
                            when(this.field, [response]);
                        })
                    });
                } else {
                    when(this.field, depend)
                }
            });
        })
    }

    protected initialization(form: Form, field: GatherFields) {
        this.form = form;
        this.field = field;
    }
    protected makeReaction(actions: ActionsType) {
        const actioned = isArray(actions) ? actions : [actions];

        this.reaction = map<ActionRaw, IReaction>(actioned, (raw) => {
            return {
                ...raw,
                async: raw.async,
                depend: this.setupDepend(raw),
                when: this.setupWhen(raw)
            }
        });
    }
    protected setupDepend(raw: ActionRaw) {
        const { depend } = raw;

        const depended = isArray(depend) ? depend : [depend];

        return depended.map(path => path && this.form.getFieldIn(path));
    }
    protected setupWhen(raw: ActionRaw) {
        const { when } = raw;

        return shallowCompile(when);
    }

    uninstall = () => {
        this.reactionWatch();
    }
}

export {
    Action
}