/*
 * @Author: maggot-code
 * @Date: 2021-12-08 16:16:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-09 18:43:20
 * @Description: file content
 */
import type {
    PropType,
    ExtractPropTypes,
} from 'vue';

import {
    h,
    provide,
    defineComponent
} from 'vue';
import { NForm } from 'naive-ui';
import { useAttach } from '../hooks/use-attach';
import { FormSymbol } from '../public';
import { default as FormModel } from '../domain/Form';

const providerProps = {
    form: {
        type: Object as PropType<FormModel>,
        required: true
    },
} as const;

export type ProviderSetupProps = ExtractPropTypes<typeof providerProps>;

export default defineComponent({
    name: "FormProvider",
    props: providerProps,
    setup(props, { attrs, slots }) {
        const getForm = () => props.form;

        const [formRef] = useAttach(getForm());

        provide(FormSymbol, formRef);

        return () => h(
            <NForm {...attrs} >{slots}</NForm>
        )
    },
});