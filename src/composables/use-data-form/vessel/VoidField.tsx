/*
 * @Author: maggot-code
 * @Date: 2021-12-19 23:29:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-20 00:15:37
 * @Description: file content
 */
import type { VNode } from 'vue';
import type { GraphDOMnode } from '../types/Graph';

import FormRecursion from '../vessel/FormRecursion';
import { default as Package } from '../components';

export default (node: GraphDOMnode): VNode => {
    const { model, children } = node;
    const { vessel } = model;
    const setupRender = Package[vessel];

    const childVNode = FormRecursion(children ?? {});

    return setupRender(model, childVNode);
}