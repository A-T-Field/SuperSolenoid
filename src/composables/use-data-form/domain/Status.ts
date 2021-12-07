/*
 * @Author: maggot-code
 * @Date: 2021-12-06 16:57:32
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-06 17:15:39
 * @Description: file content
 */
import type {
    Ref
} from 'vue';

import type {
    DisplayType
} from './type';

import { unref } from 'vue';

class StatusModel {
    protected _display!: Ref<DisplayType>;
    protected _loading!: Ref<boolean>;

    get display() {
        return unref(this._display);
    }
    set display(type: DisplayType) {
        this._display.value = type;
    }

    get loading() {
        return unref(this._loading);
    }
    set loading(state: boolean) {
        this._loading.value = state;
    }
}

export default StatusModel;