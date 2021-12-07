/*
 * @Author: maggot-code
 * @Date: 2021-12-07 17:47:54
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-07 23:11:36
 * @Description: file content
 */
import { watchEffect } from 'vue';

import { default as FormModel } from '../domain/Form';

export const useComponent = (form: FormModel) => {
    watchEffect(() => {
        console.log(form.fieldsLength);
        console.log(form.fields);
    });

    return {};
}