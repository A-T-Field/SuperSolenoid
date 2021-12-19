/*
 * @Author: maggot-code
 * @Date: 2021-12-19 23:53:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-19 23:56:33
 * @Description: file content
 */
import type { VNode } from 'vue';

import { h } from 'vue';
import { VoidField } from '../model/VoidField';
import { NGrid } from '@/plugins/naive-ui';

export default (model: VoidField, children: Array<VNode>) => {
    const { vesselProps } = model;

    return h(NGrid, { ...vesselProps }, {
        default: () => children
    });
}