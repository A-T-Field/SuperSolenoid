/*
 * @Author: maggot-code
 * @Date: 2021-12-16 22:23:28
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-20 15:34:10
 * @Description: file content
 */
import type { Ref } from 'vue';
import type {
    ModelType,
    FieldProps
} from '../types/Field';

import { unref, ref } from 'vue';
import { Share } from './Share';
import { Form } from './Form';

class BaseField extends Share {
    displayName = "BaseField";

    protected _form!: Form;
    protected _modelType: Ref<ModelType> = ref<ModelType>("Unknow");
    protected _key: Ref<string> = ref<string>("");
    protected _parent: Ref<Nullable<string>> = ref<Nullable<string>>(null);
    protected _address: Ref<string> = ref<string>("");
    protected _path: Ref<string> = ref<string>("");
    protected _level: Ref<number> = ref<number>(-1);
    protected _sort: Ref<number> = ref<number>(-1);
    protected _required: Ref<boolean> = ref<boolean>(false);

    constructor(props: FieldProps, form: Form) {
        super(props);
        this._form = form;

        this.modelType = props.modelType;
        this.key = props.key;
        this.parent = props.parent;
        this.address = props.address;
        this.path = props.path;
        this.level = props.level;
        this.sort = props.sort;
        this.required = props.required;
    }

    get modelType() {
        return unref(this._modelType);
    }
    get key() {
        return unref(this._key);
    }
    get parent() {
        return unref(this._parent);
    }
    get address() {
        return unref(this._address);
    }
    get path() {
        return unref(this._path);
    }
    get level() {
        return unref(this._level);
    }
    get sort() {
        return unref(this._sort);
    }
    get required() {
        return unref(this._required);
    }
    set modelType(type: ModelType) {
        this._modelType.value = type;
    }
    set key(val: string) {
        this._key.value = val;
    }
    set parent(val: Nullable<string>) {
        this._parent.value = val;
    }
    set address(val: string) {
        this._address.value = val;
    }
    set path(val: string) {
        this._path.value = val;
    }
    set level(val: number) {
        this._level.value = val;
    }
    set sort(val: number) {
        this._sort.value = val;
    }
    set required(status: boolean) {
        this._required.value = status;
    }
}

export {
    BaseField
}