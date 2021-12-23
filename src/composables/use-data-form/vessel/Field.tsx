/*
 * @Author: maggot-code
 * @Date: 2021-12-19 23:29:39
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-20 16:00:21
 * @Description: file content
 */
import type { VNode } from 'vue';
import type { GraphDOMnode } from '../types/Graph';

import { default as Package } from '../components';

export default (node: GraphDOMnode): VNode => {
    const { model } = node;
    const { vessel } = model;
    const setupRender = Package[vessel];

    return setupRender(model)
}