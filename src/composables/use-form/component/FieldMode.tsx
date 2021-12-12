/*
 * @Author: maggot-code
 * @Date: 2021-12-12 22:39:26
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-12 23:21:07
 * @Description: file content
 */
import type { ExtractPropTypes } from 'vue';
import type { FieldSetupProps } from './FormField';

import { h, unref, toRaw, defineComponent } from 'vue';
import { isNil } from '@/utils/is';
// import {} from '../hooks/use-form';
import { useField } from '../hooks/use-field';
import { fieldProps } from '../public/props';
import { default as FormUnknow } from './FormUnknow';

const modeProps = {
    ...fieldProps
} as const;

export type ModeSetupProps = ExtractPropTypes<typeof modeProps> & FieldSetupProps;

export default defineComponent({
    name: "FieldMode",
    props: modeProps,
    setup(props, { attrs }) {
        const fieldRef = useField();

        const [component, componenrProps] = unref(fieldRef).component;

        if (isNil(component)) {
            return () => h(<FormUnknow></FormUnknow>)
        }

        return () => h(toRaw(component), {
            ...componenrProps,
            value: fieldRef.value.getFieldValue(),
            onInput: fieldRef.value.setFieldValue
        })
    }
});