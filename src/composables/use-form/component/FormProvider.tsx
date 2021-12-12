/*
 * @Author: maggot-code
 * @Date: 2021-12-12 22:16:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-12 22:26:52
 * @Description: file content
 */
import type {
    ExtractPropTypes
} from 'vue';

import {
    h,
    unref,
    provide,
    defineComponent
} from 'vue';
import { NForm } from '@/plugins/naive-ui';
import { useAttach } from '../hooks/use-attach';
import { providerProps } from '../public/props';
import { FormSymbol } from '../public/context';

export type ProviderSetupProps = ExtractPropTypes<typeof providerProps>;

export default defineComponent({
    name: "FormProvider",
    props: providerProps,
    setup(props, { attrs, slots }) {
        const getForm = () => props.form;

        const [formRef] = useAttach(getForm());

        provide(FormSymbol, formRef);

        const context = {
            ...attrs,
            ...unref(formRef.value.options),
            model: unref(formRef.value.values)
        }

        return () => h(
            <NForm {...context}>
                {slots}
            </NForm>
        )
    }
});