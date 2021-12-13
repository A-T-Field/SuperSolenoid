/*
 * @Author: maggot-code
 * @Date: 2021-12-13 13:04:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-13 14:40:00
 * @Description: file content
 */
import { Ref } from 'vue';
import type {
    FieldOptions
} from '../type/domain';

import { unref, ref } from 'vue';
import { isEmptyString } from '@/utils/is';
import { default as Share } from './Share';
import { default as FormModel } from './Form';

class BaseField extends Share {
    protected _form!: FormModel;
    protected _tips: Ref<string> = ref("");
    protected _describe: Ref<string> = ref("");
    protected _prefix: Ref<string> = ref("");
    protected _suffix: Ref<string> = ref("");

    constructor(options: Partial<FieldOptions>, form: FormModel) {
        super(options);
        this._form = form;
        this._tips.value = options.tips ?? "";
        this._describe.value = options.describe ?? "";
        this._prefix.value = options.prefix ?? "";
        this._suffix.value = options.suffix ?? "";
    }

    get tips() {
        return unref(this._tips);
    }
    get describe() {
        return unref(this._describe);
    }
    get prefix() {
        return unref(this._prefix);
    }
    get suffix() {
        return unref(this._suffix);
    }
    set tips(text: string) {
        this._tips.value = text;
    }
    set describe(text: string) {
        this._describe.value = text;
    }
    set prefix(text: string) {
        this._prefix.value = text;
    }
    set suffix(text: string) {
        this._suffix.value = text;
    }

    showTips = () => !isEmptyString(this.tips);
    showDescribe = () => !isEmptyString(this.describe);
    showPrefix = () => !isEmptyString(this.prefix);
    showSuffix = () => !isEmptyString(this.suffix);
}

export default BaseField;