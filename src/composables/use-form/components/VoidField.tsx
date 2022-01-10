/*
 * @Author: maggot-code
 * @Date: 2022-01-10 14:46:47
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-10 15:01:21
 * @Description: file content
 */
import type { VNode } from 'vue';

import { h } from 'vue';
import { VoidField } from '../model/VoidField';
import { NGrid } from '@/plugins/naive-ui';

const component = {
    Grid: NGrid
}

const VoidFieldComponent = (props: VoidField, children: Array<VNode>) => {
    const [vesselType, vesselProps] = props.vessel;

    return h(component[vesselType], { ...vesselProps }, {
        default: () => children
    });
}

export default VoidFieldComponent;