/*
 * @Author: maggot-code
 * @Date: 2021-11-30 16:10:06
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-02 18:26:57
 * @Description: file content
 */
import type { FormOptions } from './types/form';

import { unref, computed, watch } from 'vue';

import { default as useProps } from './hooks/use-props';
import { default as useForm } from './hooks/use-form';
import { default as useSchema } from './hooks/use-schema';

export default function (options?: FormOptions) {
    const { props } = useProps(options ?? {});

    const {
        formRef,
        useFormRef
    } = useForm();

    const {
        getFormSchema,
        setFormSchema,
        setFormSchemata
    } = useSchema(props);

    const formBind = computed(() => {
        return {
            ...unref(props)
        };
    });

    return {
        getFormSchema,
        formRef,
        formBind,
        setFormSchema,
        setFormSchemata
    }
}