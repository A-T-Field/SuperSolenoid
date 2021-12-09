/*
 * @Author: maggot-code
 * @Date: 2021-12-06 16:51:21
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-09 10:46:45
 * @Description: file content
 */
import type { Ref } from 'vue';
import type { ObjectStringAny, FieldComponent } from './type';

import { unref } from 'vue';
import { toArray } from '@/utils/is';

import { default as StatusModel } from './Status';
import { default as FormModel } from './Form';

class BaseField<Component = any>
    extends StatusModel {
    protected _form!: FormModel;
    protected _name!: string;
    protected _path!: string;
    protected _mode!: string;
    protected _componentType!: Component;
    protected _componentProps!: ObjectStringAny;

    protected _initialValue!: Ref<any>;
    protected _value!: Ref<any>;

    protected setDisplay() {
        return unref(this._form.display);
    }
    protected setLoading() {
        return unref(this._form.loading);
    }

    get form() {
        return this._form;
    }
    get name() {
        return this._name;
    }
    get path() {
        return this._path;
    }
    get mode() {
        return this._mode;
    }
    get component() {
        return [this._componentType, this._componentProps];
    }
    set component(value: FieldComponent<Component>) {
        const [component, props] = toArray(value);
        this._componentType = component;
        this._componentProps = props ?? {};
    }
}

export default BaseField;