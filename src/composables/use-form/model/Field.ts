/*
 * @Author: maggot-code
 * @Date: 2022-01-03 14:02:44
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-07 16:32:23
 * @Description: file content
 */
import type { CheckValueType, ElementComponent } from '../types/share';
import type { DataSourceType } from '../types/schema';
import type { FieldProps } from '../types/field';

import { ref, reactive, unref, computed } from 'vue';
import { isEmpty } from '../utils';
import { Form } from './Form';
import { Path } from './Path';
import { BaseField } from './BaseField';

class Field extends BaseField {
    displayName = "Field";

    protected propsProto = reactive<FieldProps>({});
    protected selfType = ref<CheckValueType>("undefined");
    protected selfValue = ref(undefined);
    protected selfDefaultValue = ref(undefined);
    protected selfDataSource = reactive<DataSourceType>([]);
    protected selfTitle = ref<string>("");
    protected selfExplain = ref<string>("");
    protected selfTips = ref<string>("");
    protected selfPrefix = ref<string>("");
    protected selfSuffix = ref<string>("");
    protected selfBeforePrefix = ref<string>("");
    protected selfAfterSuffix = ref<string>("");
    protected selfComponentType: ElementComponent;
    protected selfComponentProps: Record<string, any> = {};

    constructor(props: FieldProps, path: Path, form: Form) {
        super(props, path, form);

        this.initialization(props);
        this.makeValue(props);
        this.onInit();
    }

    get type() {
        return unref(this.selfType);
    }
    get value() {
        return unref(this.selfValue);
    }
    get defaultValue() {
        return unref(this.selfDefaultValue);
    }
    get dataSource() {
        return unref(this.selfDataSource);
    }
    get component() {
        return unref(computed(() => {
            return [this.selfComponentType, this.selfComponentProps];
        }));
    }
    get content() {
        return unref(computed(() => ({
            title: unref(this.selfTitle),
            explain: unref(this.selfExplain),
            tips: unref(this.selfTips),
            prefix: unref(this.selfPrefix),
            suffix: unref(this.selfSuffix),
            beforePrefix: unref(this.selfBeforePrefix),
            afterSuffix: unref(this.selfAfterSuffix)
        })))
    }
    get hasTitle() {
        return unref(computed(() => !isEmpty(unref(this.content).title)))
    }
    get hasExplain() {
        return unref(computed(() => !isEmpty(unref(this.content).explain)))
    }
    get hasTips() {
        return unref(computed(() => !isEmpty(unref(this.content).tips)))
    }
    get hasPrefix() {
        return unref(computed(() => !isEmpty(unref(this.content).prefix)))
    }
    get hasSuffix() {
        return unref(computed(() => !isEmpty(unref(this.content).suffix)))
    }
    get hasBeforePrefix() {
        return unref(computed(() => !isEmpty(unref(this.content).beforePrefix)))
    }
    get hasAfterSuffix() {
        return unref(computed(() => !isEmpty(unref(this.content).afterSuffix)))
    }
    set type(type: CheckValueType) {
        this.selfType.value = type;
    }
    set value(val: any) {
        this.selfValue.value = val;
    }
    set defaultValue(val: any) {
        this.selfDefaultValue.value = val;
    }
    set dataSource(data: DataSourceType) {
        this.selfDataSource = data;
    }
    set componentType(type: ElementComponent) {
        this.selfComponentType = type;
    }
    set componentProps(props: Record<string, any>) {
        this.selfComponentProps = props;
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

    protected initialization(props: FieldProps) {
        this.propsProto = props;
        this.dataSource = props.dataSource ?? [];
        this.componentType = props.componentType;
        this.componentProps = props.componentProps ?? {};
        this.title = props.title ?? "";
        this.explain = props.explain ?? "";
        this.tips = props.tips ?? "";
        this.prefix = props.prefix ?? "";
        this.suffix = props.suffix ?? "";
        this.beforePrefix = props.beforePrefix ?? "";
        this.afterSuffix = props.afterSuffix ?? "";
    }
    protected makeValue(props: FieldProps) {
        this.type = props.type ?? "undefined";
        this.value = props.value ?? undefined;
        this.defaultValue = props.defaultValue ?? undefined;

        this.form.setValueIn(this.keyword, this.value);
        this.form.setDefaultValueIn(this.keyword, this.defaultValue);
    }

    setValue = (val: any) => {
        this.form.setValueIn(this.keyword, val);
    }
    setDefaultValue = (val: any) => {
        this.form.setDefaultValueIn(this.keyword, val);
    }

    onInit = () => {
        this.selfInitialized.value = true;
    }
    onMount = () => {
        this.selfMounted.value = true;
    }
    onUnmount = () => {
        this.path.destroy();

        this.selfUnmounted.value = true;
    }
}

export {
    Field
}