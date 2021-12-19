/*
 * @Author: maggot-code
 * @Date: 2021-12-19 15:45:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-19 21:01:49
 * @Description: file content
 */
import type { VNode } from 'vue';
import type { GraphDOMnode } from '../types/Graph';

import { useVessel } from '../hooks/use-vessel'

export default (node: GraphDOMnode): VNode => {
    const renderVNode = useVessel(node.model.vessel);

    return renderVNode(node.model);
}