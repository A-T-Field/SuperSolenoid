/*
 * @Author: maggot-code
 * @Date: 2021-12-06 17:21:35
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-08 18:00:48
 * @Description: file content
 */
import type {
    ComponentCase,
    FieldOptions,
} from './type';

import { ref } from 'vue';
import { uid } from '@/utils/uid';
import { toArray } from '@/utils/is';

import { default as BaseField } from './BaseField';
import { default as FormModel } from './Form';

class FieldModel<Component extends ComponentCase = any>
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
        this._key = this._options.key ?? uid();
        this._path = this.key;
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
        this._form.setInitialValues(this.key, this._initialValue);
        this._form.setValuesIn(this.key, this._value);
    }

    get value() {
        return this._form.getValuesIn(this.key);
    }
    set value(value: any) {
        this._form.setValuesIn(this.key, value);
    }

    getFieldValue() {
        return this.value;
    }

    setFieldValue(value: any) {
        this.value = value;
    }
}

export default FieldModel;