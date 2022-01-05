/*
 * @Author: maggot-code
 * @Date: 2022-01-05 17:06:25
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-05 17:06:25
 * @Description: file content
 */
import type { Ref } from 'vue';

import { inject, ref } from 'vue';
import { FormSymbol } from '../shared';
import { Form } from '@formily/core';

export const useForm = (): Ref<Form> => {
    const form = inject(FormSymbol, ref());

    return form as Ref<Form>;
}