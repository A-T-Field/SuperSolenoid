/*
 * @Author: maggot-code
 * @Date: 2021-12-19 16:44:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-19 21:01:32
 * @Description: file content
 */
import type { VNode } from 'vue';
import type { GraphDOMnode } from '../types/Graph';

import { FormRecursion } from '../index';
import { default as Unknow } from '../components/Unknow';
import { default as Grid } from '../components/Grid';
import { default as FormItemGi } from '../components/FormItemGi';

const setupVessel: Record<string, (...args: any) => VNode> = {
    "Unknow": Unknow,
    "Grid": Grid,
    "FormItemGi": FormItemGi
};

export const useVessel = (node: GraphDOMnode) => {
    const { model, children } = node;
    const { vessel } = model;
    const renderVessel = setupVessel[vessel](model, FormRecursion(children ?? {}));

    return renderVessel;
};