/*
 * @Author: maggot-code
 * @Date: 2022-01-07 17:28:24
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-11 09:47:49
 * @Description: file content
 */
import type { VNode } from 'vue';
import type { StructNode, StructTree } from '../types/schema';

import { isVoidField, isVoid, isEmpty, each } from '../utils';
import { Form } from '../model/Form';
import { default as VoidFieldComponent } from './VoidField';
import { default as FieldComponent } from './Field';

interface VNodeExtend extends VNode {
    sort: number;
}

function setupSort(node: VNode, sort: number): VNodeExtend {
    return Object.assign({}, node, { sort });
}

function setupChildren(raw: StructNode, form: Form) {
    const children: Array<VNodeExtend> = [];
    if (!isEmpty(raw.children)) {
        children.push(...FormRecursion(raw.children, form));
    }
    return children;
}

function sortNode(prevNode: VNodeExtend, nextNode: VNodeExtend) {
    return prevNode.sort - nextNode.sort;
}

const FormRecursion = (props: StructTree, form: Form) => {
    const contextNode: Array<VNodeExtend> = [];

    each(props, (raw) => {
        if (isVoid(form.hasFieldIn(raw.address))) return;

        const field = form.getFieldIn(raw.address);

        contextNode.push(
            isVoidField(field)
                ? setupSort(VoidFieldComponent(field, setupChildren(raw, form)), field.sort)
                : setupSort(FieldComponent(field), field.sort)
        );
    });

    return contextNode.sort(sortNode);
}

export default FormRecursion;