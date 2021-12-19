/*
 * @Author: maggot-code
 * @Date: 2021-12-19 21:03:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-19 21:08:00
 * @Description: file content
 */
import type { VNode } from 'vue';

import { h } from 'vue';
import { Field } from '../model/Field';
import { NFormItem } from '@/plugins/naive-ui';
import { default as Input } from './Input';

const setupComponent: Record<string, (...args: any) => VNode> = {
    "Input": Input
}

export default (model: Field) => {
    const {
        component,
        vesselProps
    } = model;

    return h(NFormItem, { ...vesselProps }, {
        default: () => setupComponent[component](model)
    })
}