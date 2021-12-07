/*
 * @Author: maggot-code
 * @Date: 2021-12-06 16:47:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-07 23:09:27
 * @Description: file content
 */
import type {
    FormValues,
    FormFields,
    FormOptions,
    GeneralField,
    FieldOptions,
    FormPickProps
} from './type';

import { unref, ref, reactive } from 'vue';
import { uid } from '@/utils/uid';

import { default as StatusModel } from './Status';
import { default as FieldModel } from './Field';

class FormModel extends StatusModel {
    protected _id!: string;
    protected _options!: FormOptions;
    protected _props!: FormPickProps;
    protected _fields!: FormFields;
    protected _initialValues!: FormValues;
    protected _values!: FormValues;

    constructor(options: FormOptions) {
        super();
        this.initialize(options);
    }

    protected initialize(options: FormOptions) {
        this._id = uid();
        this._options = options;
        this._props = reactive(this._options);
        this._display = ref(this._options.display ?? "modify");
        this._loading = ref(this._options.loading ?? false);

        this._fields = reactive({});
        this._initialValues = reactive({});
        this._values = reactive({});
    }

    get fields() {
        return unref(this._fields);
    }
    get fieldsLength() {
        return Object.keys(this.fields).length;
    }
    get initialValues() {
        return unref(this._initialValues);
    }
    get values() {
        return unref(this._values);
    }
    get props() {
        return unref(this._props);
    }

    createField(props?: FieldOptions) {
        if (!props?.key) return;
        if (!this.fields[props.key]) {
            const field = new FieldModel(this, props ?? {});
            this.fields[field.key] = field;
        }
        return this.fields[props.key] as GeneralField;
    }

    getInitialValues(key: string) {
        return this.initialValues[key];
    }

    setInitialValues(key: string, value: any) {
        this.initialValues[key] = value;
    }

    getValuesIn(key: string) {
        return this.values[key];
    }

    setValuesIn(key: string, value: any) {
        this.values[key] = value;
    }
}

export default FormModel;