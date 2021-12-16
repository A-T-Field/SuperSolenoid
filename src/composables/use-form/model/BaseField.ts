/*
 * @Author: maggot-code
 * @Date: 2021-12-16 10:32:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-16 16:53:56
 * @Description: file content
 */
import type {
    VesselType,
    VesselProps,
    ComponentType,
    ComponentProps
} from '../types/Public';
import type { FieldExtends, FieldBaseProps } from '../types/Field';

import { reactive, computed, unref } from 'vue';
import { uid } from '@/utils/uid';

class BaseField {
    protected _key: string;
    protected _parentName: string;
    protected _path: string;
    protected _address: string;
    protected _level: number;
    protected _vessel: VesselType;
    protected _vesselProps: VesselProps = reactive({});
    protected _component: ComponentType;
    protected _componentProps: ComponentProps = reactive({});

    constructor(props: Partial<FieldBaseProps & FieldExtends>) {
        this._key = props.key ?? uid();
        this._parentName = props.parentName ?? "";
        this._path = props.path ?? "";
        this._address = props.address ?? "";
        this._level = props.level ?? 0;

        this.vessel = props.vessel;
        this.vesselProps = props.vesselProps ?? {};
        this.component = props.component;
        this.componentProps = props.componentProps ?? {};
    }

    get key() {
        return this._key;
    }
    get parentName() {
        return this._parentName;
    }
    get path() {
        return this._path;
    }
    get address() {
        return this._address;
    }
    get level() {
        return this._level;
    }

    get vessel() {
        return this._vessel;
    }
    get vesselProps() {
        return computed(() => unref(this._vesselProps));
    }
    get component() {
        return this._component;
    }
    get componentProps() {
        return computed(() => unref(this._componentProps));
    }

    set vessel(vesselType: VesselType) {
        this._vessel = vesselType;
    }
    set vesselProps(props: VesselProps) {
        this._vesselProps = props;
    }
    set component(componentType: ComponentType) {
        this._component = componentType;
    }
    set componentProps(props: ComponentProps) {
        this._componentProps = props;
    }
}

export {
    BaseField
}