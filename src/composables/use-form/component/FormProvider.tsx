/*
 * @Author: maggot-code
 * @Date: 2021-12-14 15:13:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-14 18:14:27
 * @Description: file content
 */
import type { FormProviderSetupProps } from '../types/props';

import { defineComponent, h, provide, unref } from 'vue';
import { useAttach } from '../hooks/useAttach';
import { FormSymbol } from '../context/symbol';
import { formProviderProps } from '../context/props';
import { Form } from '../model/Form';
import { FormRecursion } from '../index';
import { NForm } from '@/plugins/naive-ui';

export default defineComponent({
    name: "FormProvider",
    props: formProviderProps,
    setup(props: FormProviderSetupProps, { attrs }) {
        const getForm = () => props.form;

        const [formRef] = useAttach<Form>(getForm());

        provide(FormSymbol, formRef);

        const DOMTree = formRef.value.getNodeTree();

        return () => h(
            <NForm>{{
                default: () => h(
                    <FormRecursion domTree={unref(DOMTree)}></FormRecursion>
                )
            }}</NForm>
        )
    }
})