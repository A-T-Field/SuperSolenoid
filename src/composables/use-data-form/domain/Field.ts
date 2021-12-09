/*
 * @Author: maggot-code
 * @Date: 2021-12-06 17:21:35
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-09 13:23:45
 * @Description: file content
 */
import type {
    FieldOptions,
} from './type';

import { ref } from 'vue';
import { uid } from '@/utils/uid';
import { toArray } from '@/utils/is';

import { default as BaseField } from './BaseField';
import { default as FormModel } from './Form';

class FieldModel<Component = any>
    extends BaseField<Component> {
    protected _options!: FieldOptions<Component>;

    constructor(form: FormModel, options: FieldOptions<Component>) {
        super();
        this._form = form;
        this.initialize(options);
        this.markerComponent();
        this.markerValue();
    }

    protected initialize(options: FieldOptions<Component>) {
        this._options = options;
        this._name = this._options.name ?? uid();
        this._path = this.name;
        this._mode = this._options.mode ?? "unknow";
        this._initialValue = ref(this._options.initialValue);
        this._value = ref(this._options.value);

        this._display = ref(this._options.display ?? this.setDisplay());
        this._loading = ref(this._options.loading ?? this.setLoading());
    }
    protected markerComponent() {
        this.component = toArray(this._options.component);
    }
    protected markerValue() {
        this._form.setInitialValues(this.name, this._initialValue);
        this._form.setValuesIn(this.name, this._value);
    }

    get value() {
        return this._form.getValuesIn(this.name);
    }
    set value(value: any) {
        this._form.setValuesIn(this.name, value);
    }

    getFieldValue() {
        return this.value;
    }

    setFieldValue(value: any) {
        this.value = value;
    }
}

export default FieldModel;