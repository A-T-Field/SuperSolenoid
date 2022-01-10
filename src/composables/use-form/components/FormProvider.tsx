/*
 * @Author: maggot-code
 * @Date: 2022-01-07 16:46:02
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-07 17:59:53
 * @Description: file content
 */
import type { FormProviderProps } from './types';

import { onBeforeUnmount, defineComponent, h, watch, provide } from 'vue';
import { formProviderProps } from './props';
import { useAttach } from '../hooks';
import { FormSymbol } from '../utils';
import { NForm } from '@/plugins/naive-ui';
// import { default as FormRecursion } from './FormRecursion';

export default defineComponent({
    name: "FormProvider",
    inheritAttrs: false,
    props: formProviderProps,
    setup(props: FormProviderProps, { attrs, slots }) {
        const getForm = () => props.form;
        const [formRef, checker] = useAttach(getForm());
        const formWatch = watch(
            () => props.form,
            () => (formRef.value = checker(getForm()))
        )
        const body = {
            default: () => [
                slots?.default?.()
            ]
        }

        console.log(formRef.value);

        provide(FormSymbol, formRef);
        onBeforeUnmount(() => {
            formWatch();
        })

        return () => h(
            <NForm>{body}</NForm>
        )
    }
});