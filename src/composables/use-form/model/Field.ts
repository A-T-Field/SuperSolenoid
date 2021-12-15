/*
 * @Author: maggot-code
 * @Date: 2021-12-13 20:58:29
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-15 10:57:32
 * @Description: file content
 */
import { reactive, Ref } from 'vue';
import type { FieldOptions } from '../types/Field';
import type { FormVoidTree } from '../types/Form';

import { unref, ref, computed } from 'vue';
import { uid } from '@/utils/uid';
import { Share } from './Share';
import { Form } from './Form';

class Field extends Share {
    protected _form: Form;
    protected _key: string;
    protected _basePath: string;
    protected _path: string;
    protected _isVoid: boolean;

    protected _initialValue: Ref<any> = ref();
    protected _value: Ref<any> = ref();
    protected _vessel: Ref<string> = ref("");
    protected _vesselProps: Record<string, any> = reactive({});
    protected _component: Ref<string> = ref("");
    protected _componentProps: Record<string, any> = reactive({});
    protected _children: FormVoidTree = reactive({});

    protected _required: Ref<boolean> = ref<boolean>(false);
    protected _label: Ref<string> = ref<string>("标题");
    protected _placeholder: Ref<string> = ref<string>("请填选..");
    protected _tips: Ref<string> = ref<string>("");
    protected _explain: Ref<string> = ref<string>("");
    protected _prefix: Ref<string> = ref<string>("");
    protected _suffix: Ref<string> = ref<string>("");

    constructor(options: Partial<FieldOptions>, form: Form) {
        const id = uid();
        super(options);
        this._form = form;
        this._key = options.key ?? id;
        this._basePath = options.basePath ?? id;
        this._path = options.path ?? id;
        this._isVoid = options.isVoid ?? false;

        this.initialization(options);
    }
    protected initialization(options: Partial<FieldOptions>) {
        this.initialValue = options.initialValue;
        this.value = options.value;
        this.vessel = options.vessel;
        this.vesselProps = options.vesselProps;
        this.component = options.component;
        this.componentProps = options.componentProps;

        this.required = options.required ?? false;
        this.label = options.label ?? "标题";
        this.placeholder = options.placeholder ?? "请填选..";
        this.tips = options.tips ?? "";
        this.explain = options.explain ?? "";
        this.prefix = options.prefix ?? "";
        this.suffix = options.suffix ?? "";
    }

    get key() {
        return this._key;
    }
    get basePath() {
        return this._basePath;
    }
    get path() {
        return this._path;
    }
    get isVoid() {
        return this._isVoid;
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
    get children() {
        return unref(this._children);
    }
    get required() {
        return unref(this._required);
    }
    get label() {
        return unref(this._label);
    }
    get placeholder() {
        return unref(this._placeholder);
    }
    get tips() {
        return unref(this._tips);
    }
    get explain() {
        return unref(this._explain);
    }
    get prefix() {
        return unref(this._prefix);
    }
    get suffix() {
        return unref(this._suffix);
    }

    set initialValue(value: any) {
        this._initialValue.value = value;
    }
    set value(value: any) {
        this._value.value = value;
    }
    set vessel(name: string) {
        this._vessel.value = name;
    }
    set vesselProps(props: any) {
        this._vesselProps = props;
    }
    set component(name: string) {
        this._component.value = name;
    }
    set componentProps(props: any) {
        this._componentProps = props;
    }
    set children(children: FormVoidTree) {
        this._children = children;
    }
    set required(state: boolean) {
        this._required.value = state;
    }
    set label(text: string) {
        this._label.value = text;
    }
    set placeholder(text: string) {
        this._placeholder.value = text;
    }
    set tips(text: string) {
        this._tips.value = text;
    }
    set explain(text: string) {
        this._explain.value = text;
    }
    set prefix(text: string) {
        this._prefix.value = text;
    }
    set suffix(text: string) {
        this._suffix.value = text;
    }

    hasChildren = () => {
        return computed(() => {
            return Object.keys(unref(this.children)).length > 0;
        })
    }
    getFieldInitialValue = () => {
        return computed(() => this.initialValue)
    }
    getFieldValue = () => {
        return computed(() => this.value)
    }
    setFieldInitialValue = (value: any) => {
        this.initialValue = value;
    }
    setFieldValue = (value: any) => {
        this.value = value;
    }
}

export {
    Field
}