/*
 * @Author: maggot-code
 * @Date: 2021-12-12 22:27:21
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-13 09:58:46
 * @Description: file content
 */
import { h, defineComponent } from 'vue';
import { vesselProps } from '../public/props';
import FormProvider from './FormProvider';
import FormField from './FormField';

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