/*
 * @Author: maggot-code
 * @Date: 2021-12-12 22:16:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-13 15:24:39
 * @Description: file content
 */
import type { FormProps } from '../type/domain';

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

export default defineComponent({
    name: "FormProvider",
    props: providerProps,
    setup(props, { attrs, slots }) {
        const getForm = () => props.form;

        const [formRef] = useAttach(getForm());

        provide(FormSymbol, formRef);

        const context: FormProps = {
            ...attrs,
            ...unref(formRef.value.optionExtends),
            model: unref(formRef.value.getValues()),
        }

        return () => h(
            <NForm ref={unref(formRef).setFormCase} {...context}>
                {slots}
            </NForm>
        )
    }
});