/*
 * @Author: maggot-code
 * @Date: 2021-12-08 16:16:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-08 17:11:43
 * @Description: file content
 */
import type { PropType } from 'vue';

import {
    h,
    provide,
    shallowRef,
    defineComponent
} from 'vue';

import { NForm } from 'naive-ui';

import { FormSymbol } from '../context';

import { default as FormModel } from '../domain/Form';

const FormProvider = defineComponent({
    name: "FormProvider",
    props: {
        form: {
            type: Object as PropType<FormModel>,
            required: true
        }
    },
    setup(props, { attrs, slots }) {
        const getForm = () => shallowRef(props.form);

        provide(FormSymbol, getForm());

        return () => h(NForm, { attrs }, slots)
    }
});

export default FormProvider;