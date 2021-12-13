/*
 * @Author: maggot-code
 * @Date: 2021-12-11 16:49:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-13 16:32:17
 * @Description: file content
 */
import { Ref } from 'vue';
import type {
    FieldOptions
} from '../type/domain';

import { unref, ref } from 'vue';
import { uid } from '@/utils/uid';
import { toArray } from '@/utils/is';
import { default as BaseField } from './BaseField';
import { default as FormModel } from './Form';

class Field extends BaseField {
    protected _name: Ref<string> = ref(uid());
    protected _initialValue: Ref<any> = ref();
    protected _value: Ref<any> = ref();
    protected _componentType!: any;
    protected _componentProps!: any;

    constructor(options: Partial<FieldOptions>, form: FormModel) {
        super(options, form);
        this.initialization(options);
        this.markerValue(options);
        this.markerComponent(options);
        this.onCreate();
    }

    protected initialization(options: Partial<FieldOptions>) {
        const key = uid();
        this._name.value = options.name ?? key;
    }
    protected markerValue(options: Partial<FieldOptions>) {
        this.initialValue = options.initialValue;
        this.value = options.value;
    }
    protected markerComponent(options: Partial<FieldOptions>) {
        this.component = options.component;
    }

    get name() {
        return unref(this._name);
    }
    get path() {
        return this.name;
    }
    get initialValue() {
        return unref(this._initialValue);
    }
    get value() {
        return this._form.getValuesIn(this.name);
    }
    get component() {
        return [this._componentType, this._componentProps];
    }
    set initialValue(value: any) {
        this._initialValue.value = value;
    }
    set value(value: any) {
        this._value.value = value;
        this._form.setValuesIn(this.name, unref(this._value));
    }
    set component(component: any) {
        const [render, props] = toArray(component);
        this._componentType = render;
        this._componentProps = props;
    }

    getFieldValue = () => {
        return this.value;
    }
    setFieldValue = (value: any) => {
        this.value = value;
    }

    onInput = async (value: any) => {
        this.setFieldValue(value);
    }
    onSelect = async (value: any) => {
        this.setFieldValue(value);
    }
    onUpdateChecked = async (value: any) => {
        this.setFieldValue(value);
    }
    onUpdateValue = async (value: any) => {
        this.setFieldValue(value);
    }
};

export default Field;