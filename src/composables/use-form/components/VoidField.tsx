/*
 * @Author: maggot-code
 * @Date: 2022-01-10 14:46:47
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-11 18:15:44
 * @Description: file content
 */
import type { VNode } from 'vue';
import type { GatherFields } from '../types/share';

import { h } from 'vue';
import { NGrid, NGridItem } from '@/plugins/naive-ui';

const component = {
    Grid: NGrid,
    GridItem: NGridItem,
}

const VoidFieldComponent = (props: GatherFields, children: Array<VNode>) => {
    const [vesselType, vesselProps] = props.vessel;

    return h(component[vesselType], { ...vesselProps, key: props.designID }, {
        default: () => children
    });
}

export default VoidFieldComponent;