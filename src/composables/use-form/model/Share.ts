/*
 * @Author: maggot-code
 * @Date: 2021-12-13 20:56:06
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-13 22:00:19
 * @Description: file content
 */
import { reactive, Ref } from 'vue';
import type { DisplayType, InteractType } from '../types/Public';
import type { ShareOptions } from '../types/Share';


import { unref, ref } from 'vue';
import { uid } from '@/utils/uid';
import { LifeCycle } from './LifeCycle';

class Share extends LifeCycle {
    protected _designID: string = uid();
    protected _options: Partial<ShareOptions> = reactive({});
    protected _loading: Ref<boolean> = ref<boolean>(false);
    protected _display: Ref<DisplayType> = ref<DisplayType>("hidden");
    protected _interact: Ref<InteractType> = ref<InteractType>("disable");

    constructor(options: Partial<ShareOptions>) {
        super();
        this.options = options;
        this.loading = this.options.loading ?? false;
        this.display = this.options.display ?? "visable";
        this.interact = this.options.interact ?? "modify";
    }

    get designID() {
        return this._designID;
    }
    get options() {
        return unref(this._options);
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
    set options(options: Partial<ShareOptions>) {
        this._options = options;
    }
    set loading(state: boolean) {
        this._loading.value = state;
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