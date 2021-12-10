/*
 * @Author: maggot-code
 * @Date: 2021-12-09 17:08:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-10 10:06:37
 * @Description: file content
 */
import type { FieldSetupProps } from './FormField';
import type {
    ExtractPropTypes
} from 'vue';

import {
    h,
    defineComponent,
} from 'vue';
// import { useForm } from '../hooks/use-form';
import { useField } from '../hooks/use-field';
import { getRawComponent } from '../public';
import { fieldProps } from '../props/field';

const modeProps = {
    ...fieldProps
} as const;

export type ModeSetupProps = ExtractPropTypes<typeof modeProps> & FieldSetupProps;

export default defineComponent({
    name: "FieldMode",
    props: modeProps,
    setup(props, { attrs }) {
        // const formRef = useForm();
        const fieldRef = useField();

        const [component, componentProps] = getRawComponent(props);

        return () => h(component, {
            ...componentProps,
            value: fieldRef.value.getFieldValue(),
            onInput: (value) => {
                fieldRef.value.setFieldValue(value)
            },
            onUpdateValue: (value) => {
                fieldRef.value.setFieldValue(value);
            }
        })
    }
})