/*
 * @Author: maggot-code
 * @Date: 2021-12-08 16:16:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-09 13:11:29
 * @Description: file content
 */
import type { PropType } from 'vue';
import type { FieldOptions } from '../domain/type';

import {
    h,
    provide,
    defineComponent
} from 'vue';
import { useAttach } from '../hooks/use-attach';
import { FormSymbol } from '../public';
import { NForm } from 'naive-ui';
import { default as FormModel } from '../domain/Form';
import { default as FormField } from './FormField';

const FormProvider = defineComponent({
    name: "FormProvider",
    inheritAttrs: false,
    props: {
        form: {
            type: Object as PropType<FormModel>,
            required: true
        },
        schema: {
            type: Array as PropType<Array<FieldOptions>>,
            default: () => [] as Array<FieldOptions>
        }
    },
    setup(props, { attrs, slots }) {
        const getForm = () => props.form;

        const [formRef] = useAttach(getForm());

        provide(FormSymbol, formRef);

        return () => h(NForm, { ...attrs }, {
            default: () => {
                const children = props.schema.map((options) => {
                    return h(FormField, options)
                });

                return children;
            }
        });
    }
});

export default FormProvider;