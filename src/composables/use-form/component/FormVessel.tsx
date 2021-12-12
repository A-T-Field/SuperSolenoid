/*
 * @Author: maggot-code
 * @Date: 2021-12-12 22:27:21
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-12 23:12:05
 * @Description: file content
 */
import type { PropType, ExtractPropTypes } from 'vue';
import type { FieldSetupProps } from './FormField';

import { h, defineComponent } from 'vue';
import { providerProps } from '../public/props';
import FormProvider from './FormProvider';
import FormField from './FormField';

const vesselProps = {
    ...providerProps,
    schema: {
        type: Array as PropType<Array<
            Partial<FieldSetupProps> & {
                name: string
            }
        >>,
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
                data.push(h(item));
            })
        };

        return () => h(
            <FormProvider {...attrs} form={props.form}>
                {{
                    default: () => data
                }}
            </FormProvider>
        )
    }
});