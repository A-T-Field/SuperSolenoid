/*
 * @Author: maggot-code
 * @Date: 2022-01-03 14:02:44
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-03 23:06:59
 * @Description: file content
 */
import type { Ref } from 'vue';
import type { ValueType, IFieldProps } from './types';

import { unref, ref, reactive } from 'vue';
import { uid } from '../utils/uid';
import { isEmpty } from '../utils/isEmpty';
import { Form } from './Form';
import { BaseField } from './BaseField';

class Field extends BaseField {
    displayName = "Field";

    name!: string;
    value!: Ref<ValueType>;
    defaultValue!: Ref<ValueType>;
    dataSource!: Record<string, any>;
    title!: Ref<string>;
    explain!: Ref<string>;
    tips!: Ref<string>;
    prefix!: Ref<string>;
    suffix!: Ref<string>;
    beforePrefix!: Ref<string>;
    afterSuffix!: Ref<string>;

    constructor(props: IFieldProps, form: Form) {
        super(props, form);

        this.name = props?.name ?? uid();
        this.value = ref(props?.value);
        this.defaultValue = ref(props?.defaultValue);
        this.dataSource = reactive(props?.dataSource ?? {});
        this.title = ref(props?.title ?? "");
        this.explain = ref(props?.explain ?? "");
        this.tips = ref(props?.tips ?? "");
        this.prefix = ref(props?.prefix ?? "");
        this.suffix = ref(props?.suffix ?? "");
        this.beforePrefix = ref(props?.beforePrefix ?? "");
        this.afterSuffix = ref(props?.afterSuffix ?? "");
    }

    get hasExplain() {
        return !isEmpty(unref(this.explain));
    }
    get hasTips() {
        return !isEmpty(unref(this.tips));
    }
    get hasPrefix() {
        return !isEmpty(unref(this.prefix));
    }
    get hasSuffix() {
        return !isEmpty(unref(this.suffix));
    }
    get hasBeforePrefix() {
        return !isEmpty(unref(this.beforePrefix));
    }
    get hasAfterSuffix() {
        return !isEmpty(unref(this.afterSuffix));
    }

    setValue = (val: ValueType) => {
        this.value.value = val;
    }
    setDefaultValue = (val: ValueType) => {
        this.defaultValue.value = val;
    }
    setTitle = (val: string) => {
        this.title.value = val;
    }
    setExplain = (val: string) => {
        this.explain.value = val;
    }
    setTips = (val: string) => {
        this.tips.value = val;
    }
    setPrefix = (val: string) => {
        this.prefix.value = val;
    }
    setSuffix = (val: string) => {
        this.suffix.value = val;
    }
    setBeforePrefix = (val: string) => {
        this.beforePrefix.value = val;
    }
    setAfterSuffix = (val: string) => {
        this.afterSuffix.value = val;
    }
}

export {
    Field
}