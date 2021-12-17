/*
 * @Author: maggot-code
 * @Date: 2021-12-17 14:52:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 15:28:40
 * @Description: file content
 */
import type { FormProviderSetupProps } from '../types/Props';

import {
    onBeforeUnmount,
    defineComponent,
    h,
    provide,
    watch
} from 'vue';
import { formProviderProps } from '../public/props';
import { useAttach } from '../hooks/use-attach';
import { FormSymbol } from '../public/context';
import { FormSchema } from '../index';

export default defineComponent({
    name: "FormProvider",
    inheritAttrs: false,
    props: formProviderProps,
    setup(props: FormProviderSetupProps, { attrs, slots }) {
        const getForm = () => props.form;

        const [formRef, checker] = useAttach(getForm());

        const formWatch = watch(
            () => props.form,
            () => (formRef.value = checker(getForm()))
        );

        provide(FormSymbol, formRef);

        onBeforeUnmount(() => {
            formWatch();
        });

        if (props.useSchema) return () => h(FormSchema, { attrs }, slots);

        return () => h(
            <h1>form provider</h1>
        )
    }
});