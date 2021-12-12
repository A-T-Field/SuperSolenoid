/*
 * @Author: maggot-code
 * @Date: 2021-12-11 16:49:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-12 23:04:04
 * @Description: file content
 */
import type { Ref } from 'vue';
import type {
    FieldOptions
} from '../type/domain';
import type {
    ComponentUnit
} from '../type/public';

import { unref, ref } from 'vue';
import { uid } from '@/utils/uid';
import { toArray } from '@/utils/is';
import { default as Share } from './Share';
import { default as FormModel } from './Form';

class Field extends Share {
    protected _form!: FormModel;
    protected _name: Ref<string> = ref(uid());
    protected _componentType!: ComponentUnit;
    protected _componentProps!: Record<string, any>;

    constructor(options: Partial<FieldOptions>, form: FormModel) {
        super();
        this._form = form;
        this.defaultOptions(Object.assign({}, unref(this._form.options), options));
        this.initialization(options);
        this.markerComponent(options);
        this.markerValue(options);
        this.onCreate();
    }

    protected initialization(options: Partial<FieldOptions>) {
        this._name.value = options.name ?? uid();
    }
    protected markerComponent(options: Partial<FieldOptions>) {
        this.component = toArray(options.component);
    }
    protected markerValue(options: Partial<FieldOptions>) {
        this.initialValue = options.initialValue;
        this.value = options.value;
    }

    get name() {
        return unref(this._name);
    }
    get initialValue() {
        return this._form.getInitialValuesIn(this.name);
    }
    get value() {
        return this._form.getValuesIn(this.name);
    }
    get component() {
        return [this._componentType, this._componentProps];
    }
    set initialValue(value: any) {
        this._form.setInitialValuesIn(this.name, value);
    }
    set value(value: any) {
        this._form.setValuesIn(this.name, value);
    }
    set component(value: ComponentUnit) {
        const [component, props] = toArray(value);
        this._componentType = component;
        this._componentProps = props ?? {};
    }

    getFieldInitialValue = () => {
        return this._form.getInitialValuesIn(this.name);
    }
    getFieldValue = () => {
        return this._form.getValuesIn(this.name);
    }
    setFieldInitialValue = (value: any) => {
        this._form.setInitialValuesIn(this.name, value);
    }
    setFieldValue = (value: any) => {
        this._form.setValuesIn(this.name, value);
    }
};

export default Field;