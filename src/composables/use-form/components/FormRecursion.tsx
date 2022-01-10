/*
 * @Author: maggot-code
 * @Date: 2022-01-07 17:28:24
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-10 14:53:53
 * @Description: file content
 */
import type { VNode } from 'vue';
import type { StructTree } from '../types/schema';

import { isVoidField, isVoid, isEmpty, each } from '../utils';
import { Form } from '../model/Form';
import { default as VoidFieldComponent } from './VoidField';
import { default as FieldComponent } from './Field';

const FormRecursion = (props: StructTree, form: Form) => {
    const body: Array<VNode> = [];

    each(props, (raw) => {
        if (isVoid(form.hasFieldIn(raw.address))) return;

        const field = form.getFieldIn(raw.address);

        if (isVoidField(field)) {
            const children: Array<VNode> = [];
            if (!isEmpty(raw.children)) {
                children.push(...FormRecursion(raw.children, form));
            }
            body.push(VoidFieldComponent(field, children))
        } else {
            body.push(FieldComponent(field));
        }
    })

    return body;
}

export default FormRecursion;