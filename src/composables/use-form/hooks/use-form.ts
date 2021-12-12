/*
 * @Author: maggot-code
 * @Date: 2021-12-12 22:13:10
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-12 22:13:10
 * @Description: file content
 */
import type { Ref } from 'vue';

import { inject, ref } from 'vue'
import { FormSymbol } from '../public/context';

import { default as FormModel } from '../domain/Form';

export const useForm = (): Ref<FormModel> => {
    const form = inject(FormSymbol, ref());

    return form as any;
}