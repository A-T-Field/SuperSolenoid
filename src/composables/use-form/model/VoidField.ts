/*
 * @Author: maggot-code
 * @Date: 2022-01-03 14:02:51
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-07 11:03:09
 * @Description: file content
 */
import type { VoidFieldProps } from '../types/field';

import { reactive } from 'vue';
import { BaseField } from './BaseField';

class VoidField extends BaseField {
    displayName = "VoidField";

    protected propsProto = reactive<VoidFieldProps>({});

    constructor(props: VoidFieldProps) {
        super(props)

        this.initialization(props);
        this.onInit();
    }

    protected initialization(props: VoidFieldProps) {
        this.propsProto = props;
    }

    onInit = () => { }
    onMount = () => { }
    onUnmount = () => { }
}

export {
    VoidField
}