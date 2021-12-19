/*
 * @Author: maggot-code
 * @Date: 2021-12-19 15:29:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-19 21:02:30
 * @Description: file content
 */
import type { GraphDOMnode, GraphDOMtree } from '../types/Graph';

import { useVessel } from '../hooks/use-vessel'

const doSort = (preNode: GraphDOMnode, nextNode: GraphDOMnode) => {
    return preNode.model.sort - nextNode.model.sort;
}

export default (graphes: GraphDOMtree) => {
    return Object.values(graphes).sort(doSort).map(node => {
        return useVessel(node);
    })
};