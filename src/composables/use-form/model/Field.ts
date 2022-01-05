/*
 * @Author: maggot-code
 * @Date: 2022-01-03 14:02:44
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-05 10:22:53
 * @Description: file content
 */
import type { IFieldProps } from './types';

import { unref, ref, computed } from 'vue';
import { uid } from '../utils/uid';
import { isEmpty } from '../utils/isEmpty';
import { Path } from './Path';
import { Form } from './Form';
import { BaseField } from './BaseField';

class Field<ValueType = any> extends BaseField {
    displayName = "Field";
    path!: Path;

    protected selfProps: IFieldProps<ValueType> = {};
    protected selfKey = ref(uid());
    protected selfTitle = ref(this.displayName);
    protected selfExplain = ref("");
    protected selfTips = ref("");
    protected selfPrefix = ref("");
    protected selfSuffix = ref("");
    protected selfBeforePrefix = ref("");
    protected selfAfterSuffix = ref("");
    // protected selfValue = ref<ValueType>();
    // protected selfDefaultValue = ref<ValueType>();
    // protected selfDataSource = reactive<DataSourceType>([]);

    constructor(props: IFieldProps<ValueType>, form: Form) {
        super();
        this.form = form;
        this.selfProps = props;
    }

    get key() {
        return unref(this.selfKey);
    }
    get title() {
        return unref(this.selfTitle);
    }
    get explain() {
        return unref(this.selfExplain);
    }
    get tips() {
        return unref(this.selfTips);
    }
    get prefix() {
        return unref(this.selfPrefix);
    }
    get suffix() {
        return unref(this.selfSuffix);
    }
    get beforePrefix() {
        return unref(this.selfBeforePrefix);
    }
    get afterSuffix() {
        return unref(this.selfAfterSuffix);
    }
    get hasTitle() {
        return unref(computed(() => !isEmpty(this.title)));
    }
    get hasExplain() {
        return unref(computed(() => !isEmpty(this.explain)));
    }
    get hasTips() {
        return unref(computed(() => !isEmpty(this.tips)));
    }
    get hasPrefix() {
        return unref(computed(() => !isEmpty(this.prefix)));
    }
    get hasSuffix() {
        return unref(computed(() => !isEmpty(this.suffix)));
    }
    get hasBeforePrefix() {
        return unref(computed(() => !isEmpty(this.beforePrefix)));
    }
    get hasAfterSuffix() {
        return unref(computed(() => !isEmpty(this.afterSuffix)));
    }
    set key(key: string) {
        this.selfKey.value = key;
    }
    set title(val: string) {
        this.selfTitle.value = val;
    }
    set explain(val: string) {
        this.selfExplain.value = val;
    }
    set tips(val: string) {
        this.selfTips.value = val;
    }
    set prefix(val: string) {
        this.selfPrefix.value = val;
    }
    set suffix(val: string) {
        this.selfSuffix.value = val;
    }
    set beforePrefix(val: string) {
        this.selfBeforePrefix.value = val;
    }
    set afterSuffix(val: string) {
        this.selfAfterSuffix.value = val;
    }
}

export {
    Field
}