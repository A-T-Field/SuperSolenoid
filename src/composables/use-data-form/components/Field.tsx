/*
 * @Author: maggot-code
 * @Date: 2021-12-17 15:42:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 17:17:05
 * @Description: file content
 */
import type { FieldSetupProps } from '../types/Props';

import {
    defineComponent,
    h
} from 'vue';
import { fieldProps } from '../public/props';
import { NFormItem, NInput } from '@/plugins/naive-ui';

export default defineComponent({
    name: "FormRecursion",
    props: fieldProps,
    setup(props: FieldSetupProps) {
        const { vesselProps, componentProps } = props.model;

        return () => h(NFormItem, { ...vesselProps }, {
            default: () => h(NInput, { ...componentProps })
        })
    }
})