/*
 * @Author: maggot-code
 * @Date: 2021-12-19 23:21:08
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-19 23:50:13
 * @Description: file content
 */
// import type { VNode } from 'vue';
import type { GraphDOMnode, GraphDOMtree } from '../types/Graph';

import VoidField from './VoidField';
import Field from './Field';
import Unknow from '../components/Unknow';

const doSort = (preve: GraphDOMnode, next: GraphDOMnode) => {
    return preve.model.sort - next.model.sort;
}

export default (graphes: GraphDOMtree) => {
    return Object.values(graphes).sort(doSort).map(node => {
        if (node.model.displayName === "VoidField") {
            return VoidField(node);
        }

        if (node.model.displayName === "Field") {
            return Field(node);
        }

        return Unknow();
    })
}