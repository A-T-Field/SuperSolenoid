/*
 * @Author: maggot-code
 * @Date: 2021-12-19 15:45:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-19 21:02:06
 * @Description: file content
 */
import type { VNode } from 'vue';
import type { GraphDOMnode } from '../types/Graph';

import { useVessel } from '../hooks/use-vessel'
import { FormRecursion } from '../index';

export default (node: GraphDOMnode): VNode => {
    const renderVNode = useVessel(node);

    return renderVNode(node.model, FormRecursion({}));
}