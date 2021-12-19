/*
 * @Author: maggot-code
 * @Date: 2021-12-19 23:13:42
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-20 00:33:07
 * @Description: file content
 */
import type { FormProviderSetupProps } from '../types/Props';

import { onBeforeUnmount, defineComponent, h, watch } from 'vue';
import { formProviderProps } from '../public/props';
import { useAttach } from '../hooks/use-attach';
import { NForm } from '@/plugins/naive-ui';
import FormRecursion from './FormRecursion';

export default defineComponent({
    name: "FormProvider",
    inheritAttrs: false,
    props: formProviderProps,
    setup(props: FormProviderSetupProps, { attrs, slots }) {
        const getForm = () => props.form;

        const [formRef, checker] = useAttach(getForm());

        const recursion = {
            default: () => [
                FormRecursion(formRef.value.getFieldGraph()),
                slots?.default?.()
            ]
        }

        const formWatch = watch(
            () => props.form,
            () => (formRef.value = checker(getForm())),
            { immediate: true }
        );

        onBeforeUnmount(() => {
            formWatch();
        });

        return () => h(
            <NForm>{recursion}</NForm>
        )
    }
});