/*
 * @Author: maggot-code
 * @Date: 2021-12-19 16:42:55
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-19 19:00:07
 * @Description: file content
 */
import type { VNode } from 'vue';
import type { FieldGather } from '../types/Field';

import { h } from 'vue';
import { NGrid } from '@/plugins/naive-ui';

export default (model: FieldGather, children: Array<VNode>) => {
    const { vesselProps } = model;

    return h(NGrid, { ...vesselProps }, {
        default: () => children
    });
}