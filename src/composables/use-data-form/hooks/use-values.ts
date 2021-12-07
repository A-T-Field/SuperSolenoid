/*
 * @Author: maggot-code
 * @Date: 2021-12-07 17:24:54
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-07 23:10:38
 * @Description: file content
 */
import { unref, computed } from 'vue';

import { default as FormModel } from '../domain/Form';

export const useValues = (form: FormModel) => {
    const formValues = computed(() => {
        return unref(form.values);
    });

    const getInitialValues = (key: string) => form.getInitialValues(key);

    const setInitialValues = (key: string, value: any) => form.setInitialValues(key, value);

    const getValuesIn = (key: string) => form.getValuesIn(key);

    const setValuesIn = (key: string, value: any) => form.setValuesIn(key, value);

    return {
        formValues,
        getInitialValues,
        setInitialValues,
        getValuesIn,
        setValuesIn
    }
}