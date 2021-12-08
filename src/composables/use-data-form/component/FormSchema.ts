/*
 * @Author: maggot-code
 * @Date: 2021-12-08 18:12:28
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-08 18:23:54
 * @Description: file content
 */
import type { PropType } from 'vue';

import {
    h,
    defineComponent
} from 'vue';

import { createForm } from '@/composables/use-data-form';

import { default as FormProvider } from './FormProvider';
import { default as FormField } from './FormField';

interface IF {
    name: string
};

const FormSchema = defineComponent({
    name: "FormSchema",
    props: {
        schema: {
            type: Array as PropType<Array<IF>>,
            default: () => []
        }
    },
    setup(props) {
        const form = createForm();

        const componentData = {
            form
        };

        const fields: Array<any> = [];

        props.schema.forEach(item => {
            fields.push(h(
                FormField,
                { ...item }
            ))
        });

        return () => h(FormProvider, componentData, fields);
    }
});

export default FormSchema;