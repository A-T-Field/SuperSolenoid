/*
 * @Author: maggot-code
 * @Date: 2021-12-08 16:00:06
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-09 09:50:09
 * @Description: file content
 */
import type { Ref } from 'vue';

import { inject, ref } from 'vue'
import { FormSymbol } from '../public';

import { default as FormModel } from '../domain/Form';

export const useForm = (): Ref<FormModel> => {
    const form = inject(FormSymbol, ref());

    return form as any;
}