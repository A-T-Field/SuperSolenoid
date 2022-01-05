/*
 * @Author: maggot-code
 * @Date: 2022-01-04 15:31:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-05 16:02:01
 * @Description: file content
 */
import type { VNode } from 'vue';
import type { SchemaRaw, FormRecursionSetupProps } from './types';

import { defineComponent, h, computed } from 'vue';
import { formRecursionProps } from './props';
import { each } from '../utils';
import { FormRecursion } from './index';
import { default as FormVoidField } from './FormVoidField';
import { default as FormField } from './FormField';

export default defineComponent({
    name: "FormRecursion",
    props: formRecursionProps,
    setup(props: FormRecursionSetupProps) {
        const schema = computed(() => props.schema);

        const body: Array<VNode> = [];

        each(schema.value, setupGather);

        return () => body;

        function setupGather(raw: SchemaRaw, key: string) {
            const { type } = raw;

            if (type === `void`) {
                body.push(setupVoidField(raw, key));
                return;
            } else if (type === `array`) {

            } else if (type === `object`) {

            } else {
                body.push(setupField(raw, key));
            }
        }

        function setupVoidField(raw: SchemaRaw, key: string): VNode {
            return h(FormVoidField, {}, {
                default: () => h(FormRecursion, { schema: raw.children })
            })
        }

        function setupField(raw: SchemaRaw, key: string): VNode {
            console.log(key);

            return h(FormField, {})
        }
    }
});