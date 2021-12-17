/*
 * @Author: maggot-code
 * @Date: 2021-12-16 22:24:07
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 11:30:25
 * @Description: file content
 */
import type { Ref } from 'vue';
import type {
    DisplayType,
    InteractType,
    ShareProps
} from '../types/Share';

import { unref, ref } from 'vue';
import { uid } from '@/utils/uid';
import { LifeCycle } from './LifeCycle';

class Share extends LifeCycle {
    displayName = "Share";

    protected DesignID: string = uid();
    protected _loading: Ref<boolean> = ref<boolean>(false);
    protected _display: Ref<DisplayType> = ref<DisplayType>("hidden");
    protected _interact: Ref<InteractType> = ref<InteractType>("disable");

    constructor(props: Partial<ShareProps>) {
        super();

        this.loading = props.loading ?? false;
        this.display = props.display ?? "hidden";
        this.interact = props.interact ?? "disable";
    }

    get loading() {
        return unref(this._loading);
    }
    get display() {
        return unref(this._display);
    }
    get interact() {
        return unref(this._interact);
    }
    set loading(status: boolean) {
        this._loading.value = status;
    }
    set display(type: DisplayType) {
        this._display.value = type;
    }
    set interact(type: InteractType) {
        this._interact.value = type;
    }
}

export {
    Share
}