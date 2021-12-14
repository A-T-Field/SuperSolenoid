/*
 * @Author: maggot-code
 * @Date: 2021-12-14 16:49:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-14 18:14:47
 * @Description: file content
 */
import type { VNode } from 'vue';
import type { FormRecursionSetupProps } from '../types/props';

import { defineComponent, h, unref } from 'vue';
import { formRecursionProps } from '../context/props';
import { FormPatch, FormRecursion, FormField } from '../index';

export default defineComponent({
    name: 'FormRecursion',
    props: formRecursionProps,
    setup(props: FormRecursionSetupProps) {
        const recursion: Array<VNode> = [];
        const field: Array<VNode> = [];

        for (const name in props.domTree) {
            const { hasChildren, children } = props.domTree[name];
            if (unref(hasChildren())) {
                recursion.push(h(
                    <FormRecursion domTree={children}></FormRecursion>
                ))
            } else {
                field.push(h(
                    <FormField field={props.domTree[name]}></FormField>
                ));
            }
        }

        return () => h(
            <FormPatch>
                {{
                    default: () => [...recursion, ...field]
                }}
            </FormPatch>
        )
    }
});