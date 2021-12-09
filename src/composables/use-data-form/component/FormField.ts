/*
 * @Author: maggot-code
 * @Date: 2021-12-08 16:15:05
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-09 13:23:05
 * @Description: file content
 */
import type { PropType } from 'vue';

import {
    h,
    toRaw,
    provide,
    defineComponent
} from 'vue';
import { NFormItem } from 'naive-ui';
import { useAttach } from '../hooks/use-attach';
import { FieldSymbol } from '../public/context';

import { useForm } from '../hooks/use-form';

const FormField = defineComponent({
    name: "FormField",
    inheritAttrs: false,
    props: {
        name: {
            type: String,
            required: true
        },
        value: {
            type: String as PropType<any>,
            default: () => ""
        },
        component: {
            type: Array,
            default: () => []
        }
    },
    setup(props, { attrs, slots }) {
        const formRef = useForm();
        const createField = () => formRef.value.createField(props);

        const [fieldRef] = useAttach(createField());

        provide(FieldSymbol, fieldRef);

        // return () => h(NFormItem, { ...attrs }, {
        //     default: () => h(toRaw(fieldRef.value.component[0]), {
        //         ...fieldRef.value.component[1],
        //         value: fieldRef.value.getFieldValue(),
        //         onInput: (value) => fieldRef.value.setFieldValue(value)
        //     })
        // });

        return () => h(NFormItem, { ...attrs }, {
            default: () => {
                const aa = h(toRaw(fieldRef.value.component[0]), {
                    ...fieldRef.value.component[1],
                    value: fieldRef.value.getFieldValue(),
                    onInput: (value) => fieldRef.value.setFieldValue(value),
                    onUpdateValue: (value) => fieldRef.value.setFieldValue(value)
                });

                return aa;
            }
        });
    }
});

export default FormField;