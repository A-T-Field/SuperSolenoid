/*
 * @Author: maggot-code
 * @Date: 2021-12-06 17:21:35
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-07 23:09:48
 * @Description: file content
 */
import type { DefineComponent } from 'vue';
import type {
    FieldOptions,
} from './type';

import { ref } from 'vue';
import { uid } from '@/utils/uid';

import { default as BaseField } from './BaseField';
import { default as FormModel } from './Form';

class FieldModel
    <
    Component extends DefineComponent = any
    >
    extends
    BaseField<Component>
{
    protected _props!: FieldOptions;

    constructor(form: FormModel, props: FieldOptions) {
        super();
        this._form = form;
        this.initialize(props);
        this.markerMode();
        this.markerValue();
    }

    protected initialize(props: FieldOptions) {
        this._props = props;
        this._fieldItemProps = this._props;
        this._key = this._props.key ?? uid();
        this._path = this.key;
        this._mode = this._props.mode ?? "unknow";
        this._initialValue = ref(this._props.initialValue);
        this._value = ref(this._props.value);

        this._display = ref(this._props.display ?? this.setDisplay());
        this._loading = ref(this._props.loading ?? this.setLoading());
    }
    protected markerMode() {
        console.log('mode');
        console.log(this.mode);
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