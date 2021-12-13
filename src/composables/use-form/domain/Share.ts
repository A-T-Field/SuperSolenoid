/*
 * @Author: maggot-code
 * @Date: 2021-12-10 15:42:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-13 14:50:11
 * @Description: file content
 */
import { computed, Ref } from 'vue';
import type {
    OptionsType,
    DisplayType,
    InteractType,
    PositionType,
    AlignType
} from '../type/public';

import { ref, unref } from 'vue';
import { uid } from '@/utils/uid';
import { default as LifeCycle } from './LifeCycle';

class Share extends LifeCycle {
    protected _designID: string = uid();
    protected _loading: Ref<boolean> = ref(true);
    protected _display: Ref<DisplayType> = ref("hidden");
    protected _interact: Ref<InteractType> = ref("disable");
    protected _showColon: Ref<boolean> = ref(false);
    protected _labelWidth: Ref<number> = ref(160);
    protected _labelPlacement: Ref<PositionType> = ref("left");
    protected _labelAlign: Ref<AlignType> = ref("right");
    protected _requireMarkPlacement: Ref<AlignType> = ref("left");

    constructor(options: Partial<OptionsType>) {
        super();
        this._loading.value = options.loading ?? false;
        this._display.value = options.display ?? "visable";
        this._interact.value = options.interact ?? "modify";
        this._showColon.value = options.showColon ?? true;
        this._labelWidth.value = options.labelWidth ?? 160;
        this._labelPlacement.value = options.labelPlacement ?? "left";
        this._labelAlign.value = options.labelAlign ?? "right";
        this._requireMarkPlacement.value = options.requireMarkPlacement ?? "left";
    }

    get optionExtends() {
        return computed<OptionsType>(() => ({
            loading: unref(this._loading),
            display: unref(this._display),
            interact: unref(this._interact),
            showColon: unref(this._showColon),
            labelWidth: unref(this._labelWidth),
            labelPlacement: unref(this._labelPlacement),
            labelAlign: unref(this._labelAlign),
            requireMarkPlacement: unref(this._requireMarkPlacement)
        }));
    }
};

export default Share;