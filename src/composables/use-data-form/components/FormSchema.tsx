/*
 * @Author: maggot-code
 * @Date: 2021-12-17 15:26:24
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 17:20:04
 * @Description: file content
 */
import type { VNode } from 'vue';
import type { FormSchemaSetupProps } from '../types/Props';

import {
    defineComponent,
    h,
    computed,
    unref
} from 'vue';
import { formSchemaProps } from '../public/props';
import { useForm } from '../hooks/use-form';
import { useRender } from '../hooks/use-render';
import { NForm } from '@/plugins/naive-ui';

export default defineComponent({
    name: "FormSchema",
    props: formSchemaProps,
    setup(props: FormSchemaSetupProps) {
        const formRef = useForm();

        const graph = computed(() => formRef.value.getFieldGraph());

        const vnodeChild: Array<VNode> = useRender(unref(graph));

        if (vnodeChild.length <= 0) vnodeChild.push(h(<h1>unknow</h1>));

        return () => h(
            <NForm labelPlacement='left' labelWidth={90}>
                {{
                    default: () => vnodeChild
                }}
            </NForm>
        );
    }
});