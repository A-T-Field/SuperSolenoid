/*
 * @Author: maggot-code
 * @Date: 2021-12-14 15:13:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-15 12:55:34
 * @Description: file content
 */
import type { FormProviderSetupProps } from '../types/props';

import { defineComponent, h, provide } from 'vue';
import { useAttach } from '../hooks/useAttach';
import { FormSymbol } from '../context/symbol';
import { formProviderProps } from '../context/props';
import { Form } from '../model/Form';

export default defineComponent({
    name: "FormProvider",
    props: formProviderProps,
    setup(props: FormProviderSetupProps, { attrs }) {
        const getForm = () => props.form;

        const [formRef] = useAttach<Form>(getForm());

        provide(FormSymbol, formRef);

        return () => h(
            <h1>form provider</h1>
        )
    }
})