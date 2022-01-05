/*
 * @Author: maggot-code
 * @Date: 2022-01-03 14:02:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-05 10:52:07
 * @Description: file content
 */
import type { GatherFields } from './types';

import { unref, ref, reactive } from 'vue';
import { uid } from '../utils/uid';
import { Share } from './Share';
import { Path } from './Path';
import { Form } from './Form';

class BaseField extends Share {
    designID = uid();
    address!: Path;

    protected form!: Form;
    protected parent!: GatherFields | null;
    protected level!: number;

    protected componentType = undefined;
    protected componentProps = reactive<Record<string, any>>({});
    protected vesselType = undefined;
    protected vesselProps = reactive<Record<string, any>>({});
    protected selfRequired = ref<boolean>(false);
    protected selfActive = ref<boolean>(false);
    protected selfVisite = ref<boolean>(false);

    get component() {
        return [
            this.componentType,
            unref(this.componentProps)
        ];
    }
    get vessel() {
        return [
            this.vesselType,
            unref(this.vesselProps)
        ];
    }
    get active() {
        return unref(this.selfActive);
    }
    get visite() {
        return unref(this.selfVisite);
    }

    setComponent = (type: any, props: Record<string, any>) => {
        this.componentType = type;
        this.setComponentProps(props);
    }
    setComponentProps = (props: Record<string, any>) => {
        this.componentProps = props;
    }
    setVessel = (type: any, props: Record<string, any>) => {
        this.vesselType = type;
        this.setVesselProps(props);
    }
    setVesselProps = (props: Record<string, any>) => {
        this.vesselProps = props;
    }
}

export {
    BaseField
}