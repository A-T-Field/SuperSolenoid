/*
 * @Author: maggot-code
 * @Date: 2021-12-10 15:38:35
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-12 22:26:11
 * @Description: file content
 */
import type {
    FormOptions,
    FormValuesType,
    FormFieldes,
    FieldOptions
} from '../type/domain';

import { reactive, unref } from 'vue';
import { isNil } from '@/utils/is';
import { default as Share } from './Share';
import { default as Field } from './Field';

class FormModel extends Share {
    protected _fields!: FormFieldes;
    protected _initialValues!: FormValuesType;
    protected _values!: FormValuesType;

    constructor(options: Partial<FormOptions>) {
        super();
        this.defaultOptions(options);
        this.initialization();
        this.onCreate();
    }

    protected initialization() {
        this._fields = reactive({});
        this._initialValues = reactive({});
        this._values = reactive({});
    }

    get initialValues() {
        return unref(this._initialValues);
    }
    get values() {
        return unref(this._values);
    }

    createField = (options: Partial<FieldOptions>) => {
        const { name } = options;

        if (isNil(name)) {
            console.log('need name');
            return;
        }

        if (isNil(this._fields[name])) {
            this._fields[name] = new Field(options, this);
        }

        return this._fields[name]
    }

    getInitialValuesIn = (name: string) => {
        return unref(this._initialValues)[name];
    }
    getValuesIn = (name: string) => {
        return unref(this._values)[name];
    }
    setInitialValuesIn = (name: string, value: any) => {
        this._initialValues[name] = value;
    }
    setValuesIn = (name: string, value: any) => {
        this._values[name] = value;
    }
};

export default FormModel;