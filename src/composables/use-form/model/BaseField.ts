/*
 * @Author: maggot-code
 * @Date: 2022-01-03 14:02:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-03 23:06:19
 * @Description: file content
 */
import type { Ref } from 'vue';
import type { IBaseFieldProps } from './types';

import { unref, ref } from 'vue';
import { uid } from '../utils/uid';
import { Form } from './Form';
import { Share } from './Share';

class BaseField extends Share {
    designID = uid();

    form!: Form;
    parent!: string;
    address!: string;
    path!: string;
    level!: number;

    protected componentType!: any;
    protected componentProps!: Record<string, any>;
    protected vesselType!: any;
    protected vesselProps!: Record<string, any>;
    protected selfRequired!: Ref<boolean>;
    protected selfActive!: Ref<boolean>;
    protected selfVisite!: Ref<boolean>;

    constructor(props: IBaseFieldProps, form: Form) {
        super(props);

        this.form = form;

        this.componentType = props?.componentType ?? "";
        this.componentProps = props?.componentProps ?? {};
        this.vesselType = props?.vesselType ?? "";
        this.vesselProps = props?.vesselProps ?? {};
        this.selfRequired = ref(props?.required ?? false);
        this.selfActive = ref(false);
        this.selfVisite = ref(false);
    }

    get component() {
        return [this.componentType, this.componentProps];
    }
    get vessel() {
        return [this.vesselType, this.vesselProps];
    }
    get active() {
        return unref(this.selfActive);
    }
    get visite() {
        return unref(this.selfVisite);
    }

    setComponent = (type: any, props: Record<string, any>) => {
        this.componentType = type;
        this.componentProps = Object.assign({}, this.componentProps, props);
    }
    setComponentProps = (props: Record<string, any>) => {
        this.componentProps = Object.assign({}, this.componentProps, props);
    }
    setVessel = (type: any, props: Record<string, any>) => {
        this.vesselType = type;
        this.vesselProps = Object.assign({}, this.vesselProps, props);
    }
    setVesselProps = (props: Record<string, any>) => {
        this.vesselProps = Object.assign({}, this.vesselProps, props);
    }

    onFocus = () => {
        if (!this.visite) this.selfVisite.value = true;
        this.selfActive.value = true;
        console.log('on focus');

    }
    onBlur = () => {
        this.selfActive.value = false;
        console.log('on blur');
    }
}

export {
    BaseField
}