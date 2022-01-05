/*
 * @Author: maggot-code
 * @Date: 2022-01-04 14:24:16
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-05 14:23:31
 * @Description: file content
 */
import { FormProviderSetupProps } from './types';

import { defineComponent, h, onBeforeUnmount, watch, provide } from 'vue';
import { formProviderProps } from './props';
import { useAttach } from '../hooks/use-attach';
import { FormSymbol } from '../utils';
import { NForm } from '@/plugins/naive-ui';
import { default as FormRecursion } from './FormRecursion';

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

        const formBody = {
            default: () => [
                <FormRecursion
                    schema={props.schema}
                ></FormRecursion>,
                slots?.default?.()
            ]
        };

        return () => h(
            <NForm>
                {formBody}
            </NForm>
        )
    }
});