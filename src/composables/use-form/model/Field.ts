/*
 * @Author: maggot-code
 * @Date: 2021-12-16 10:33:06
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-16 17:03:25
 * @Description: file content
 */
import type { Ref } from 'vue';
import type { ValueType } from '../types/Public';
import type { FieldProps } from '../types/Field';

import { unref, ref } from 'vue';
import { BaseField } from '../model/BaseField';
import { FormModel } from '../model/Form';

class Field extends BaseField {
    protected _form: FormModel;
    protected _required: Ref<boolean> = ref<boolean>(false);
    protected _initialValue: Ref<ValueType> = ref<ValueType>();
    protected _value: Ref<ValueType> = ref<ValueType>();

    constructor(props: Partial<FieldProps>, form: FormModel) {
        super(props);
        this._form = form;
        this.required = props.required ?? false;
        this.initialValue = props.initialValue;
        this.value = props.value;
    }

    get required() {
        return unref(this._required);
    }
    get initialValue() {
        return unref(this._initialValue);
    }
    get value() {
        return unref(this._value);
    }

    set required(state: boolean) {
        this._required.value = state;
    }
    set initialValue(val: ValueType) {
        this._initialValue.value = val;
    }
    set value(val: ValueType) {
        this._value.value = val;
    }
}

export {
    Field
}