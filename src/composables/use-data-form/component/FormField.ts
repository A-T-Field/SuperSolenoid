/*
 * @Author: maggot-code
 * @Date: 2021-12-08 16:15:05
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-08 18:07:56
 * @Description: file content
 */
import {
    h,
    provide,
    shallowRef,
    defineComponent
} from 'vue';

import { NFormItem, NInput } from 'naive-ui';

import { FieldSymbol } from '../context';

import { useForm } from '../hooks/use-form';

const FormField = defineComponent({
    name: "FormField",
    props: {
        name: {
            type: String,
            required: true
        }
    },
    setup(props, { slots }) {
        const formRef = useForm();

        const fieldRef = shallowRef(formRef.value.createField({
            ...props,
            key: props.name
        }));

        provide(FieldSymbol, fieldRef);

        return () => {
            const field = fieldRef.value;
            const componentData = {
                props: {
                    field,
                },
            }
            const children = {
                default: () => h(NInput, {
                    value: field.value,
                    onInput: (value) => {
                        field.setFieldValue(value);
                    }
                })
            };

            return h(NFormItem, componentData, children);
        };
    }
});

export default FormField;