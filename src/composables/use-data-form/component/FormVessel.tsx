/*
 * @Author: maggot-code
 * @Date: 2021-12-09 18:10:10
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-09 18:47:09
 * @Description: file content
 */
import type { PropType } from 'vue';
import type { FieldSetupProps } from './FormField';

import {
    h,
    defineComponent
} from 'vue';
import { createForm } from '../index';
import FormProvider from './FormProvider';
import FormField from './FormField';

export default defineComponent({
    name: "FormVessel",
    props: {
        schema: {
            type: Array as PropType<Array<FieldSetupProps>>,
            default: () => []
        }
    },
    setup(props, { attrs, slots }) {
        const form = createForm();

        const data = props.schema.map(item => {
            return h(
                <FormField {...item}></FormField>
            )
        });

        return () => h(
            <FormProvider form={form}>{{
                default: () => data
            }}</FormProvider>
        );
    }
});