/*
 * @Author: maggot-code
 * @Date: 2021-12-08 16:00:06
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-08 16:46:49
 * @Description: file content
 */
import type { Ref } from 'vue';

import { inject, ref } from 'vue'

import { FormSymbol } from '../context';

import { default as FormModel } from '../domain/Form';

export const useForm = (): Ref<FormModel> => {
    const form = inject(FormSymbol, ref());

    if (!form.value) {
        throw new Error('Can not found form instance from context.')
    }

    return form as Ref<FormModel>;
}