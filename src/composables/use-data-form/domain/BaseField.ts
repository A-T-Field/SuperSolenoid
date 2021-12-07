/*
 * @Author: maggot-code
 * @Date: 2021-12-06 16:51:21
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-07 23:08:53
 * @Description: file content
 */
import type { DefineComponent, Ref } from 'vue';
import type { ModeType, FieldComponentProps, FieldItemProps } from './type';

import { unref } from 'vue';

import { default as StatusModel } from './Status';
import { default as FormModel } from './Form';

class BaseField
    <
    Component extends DefineComponent = any
    > extends StatusModel {
    protected _form!: FormModel;
    protected _key!: string;
    protected _path!: string;
    protected _mode!: ModeType;
    protected _component!: Component;
    protected _componentProps!: FieldComponentProps;
    protected _fieldItemProps!: FieldItemProps;
    protected _initialValue!: Ref<any>;
    protected _value!: Ref<any>;
    protected _title?: Ref<string>;
    protected _prefix?: Ref<string>;
    protected _suffix?: Ref<string>;
    protected _tips?: Ref<string>;
    protected _describe?: Ref<string>;

    protected setDisplay() {
        return unref(this._form.display);
    }
    protected setLoading() {
        return unref(this._form.loading);
    }

    get form() {
        return this._form;
    }
    get key() {
        return this._key;
    }
    get path() {
        return this._path;
    }
    get mode() {
        return this._mode;
    }
    get component() {
        return this._component;
    }
    get componentProps() {
        return this._componentProps;
    }
    get fieldItemProps() {
        return this._fieldItemProps;
    }
}

export default BaseField;