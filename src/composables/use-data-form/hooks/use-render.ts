/*
 * @Author: maggot-code
 * @Date: 2021-12-17 15:57:54
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 17:21:53
 * @Description: file content
 */
import type { VNode } from 'vue';
import type { GraphDOMnode, GraphDOMtree } from '../types/Graph';

import { h } from 'vue';
import { Field, VoidField } from '../index';

const handlerSort = (prve: GraphDOMnode, next: GraphDOMnode) => prve.sort - next.sort;

export const useRender = (graph: GraphDOMtree) => {
    const vnodeChild: Array<VNode> = Object.values(graph).sort(handlerSort).map(field => {
        const { name, model, children } = field;
        if (name === "Field") return h(Field, { model });

        const voidField = VoidField({
            model,
            children: children ?? {}
        });

        return voidField;
    });

    return vnodeChild;
}