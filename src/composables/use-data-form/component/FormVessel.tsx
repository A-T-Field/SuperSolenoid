/*
 * @Author: maggot-code
 * @Date: 2021-12-09 18:10:10
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-09 23:49:45
 * @Description: file content
 */
import type { PropType, ExtractPropTypes } from 'vue';
import type { FieldSetupProps } from './FormField';

import {
    h,
    defineComponent
} from 'vue';
import FormProvider from './FormProvider';
import FormField from './FormField';
import { default as FormModel } from '../domain/Form';

const vesselProps = {
    form: {
        type: Object as PropType<FormModel>,
        required: true
    },
    schema: {
        type: Array as PropType<Array<Partial<FieldSetupProps> & {
            name: string
        }>>,
        default: () => []
    }
} as const;

export type VesselSetupProps = ExtractPropTypes<typeof vesselProps>;

export default defineComponent({
    name: "FormVessel",
    props: vesselProps,
    setup(props, { attrs, slots }) {
        const data = props.schema.map(item => {
            return h(
                <FormField {...item}></FormField>
            )
        });

        if (slots.default && slots.default().length > 0) {
            slots.default().forEach(item => {
                data.push(h(item))
            });
        }

        return () => h(
            <FormProvider {...attrs} form={props.form}>
                {{
                    default: () => data
                }}
            </FormProvider>
        );
    }
});