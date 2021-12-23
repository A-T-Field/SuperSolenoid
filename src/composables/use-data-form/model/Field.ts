/*
 * @Author: maggot-code
 * @Date: 2021-12-16 22:23:51
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-23 15:29:01
 * @Description: file content
 */
import type { Ref } from 'vue';
import type { SchemaDataSource } from '../types/Schema';
import type { FieldProps } from '../types/Field';
import type {
    ValueType,
    VesselProps,
    ComponentProps
} from '../types/Share';

import { unref, ref, reactive } from 'vue';
import { BaseField } from './BaseField';
import { Form } from './Form';

class Field extends BaseField {
    displayName = "Field";

    protected _initialValue: Ref<ValueType> = ref<ValueType>();
    protected _value: Ref<ValueType> = ref<ValueType>();
    protected _vessel: Ref<string> = ref<string>("Unknow");
    protected _vesselProps: VesselProps = reactive<VesselProps>({});
    protected _component: Ref<string> = ref<string>("Unknow");
    protected _componentProps: ComponentProps = reactive<ComponentProps>({});
    protected _dataSource: SchemaDataSource = reactive<SchemaDataSource>([]);

    constructor(props: FieldProps, form: Form) {
        super(props, form);

        this.initialValue = props.initialValue;
        this.value = props.value;
        this.vessel = props.vessel;
        this.vesselProps = props.vesselProps;
        this.component = props.component;
        this.componentProps = props.componentProps;
        this.dataSource = props.dataSource;
    }

    get initialValue() {
        return unref(this._initialValue);
    }
    get value() {
        return unref(this._value);
    }
    get vessel() {
        return unref(this._vessel);
    }
    get vesselProps() {
        return unref(this._vesselProps);
    }
    get component() {
        return unref(this._component);
    }
    get componentProps() {
        return unref(this._componentProps);
    }
    get dataSource() {
        return unref(this._dataSource);
    }
    set initialValue(val: ValueType) {
        this._initialValue.value = val;
    }
    set value(val: ValueType) {
        this._value.value = val;
    }
    set vessel(name: string) {
        this._vessel.value = name;
    }
    set vesselProps(props: VesselProps) {
        this._vesselProps = props;
    }
    set component(name: string) {
        this._component.value = name;
    }
    set componentProps(props: ComponentProps) {
        this._componentProps = props;
    }
    set dataSource(data: SchemaDataSource) {
        this._dataSource = data;
    }

    getFieldInitialValue = <V = any>() => {
        return this.initialValue as V;
    }
    getFieldValue = <V = any>() => {
        return this.value as V;
    }
    setFieldInitialValue = (value: ValueType) => {
        this.initialValue = value;
    }
    setFieldValue = (value: ValueType) => {
        this.value = value;
    }

    // 应用方法
    onInput = this.setFieldValue
    onUpdateValue = this.setFieldValue
}

export {
    Field
}