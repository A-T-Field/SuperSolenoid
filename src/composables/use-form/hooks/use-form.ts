/*
 * @Author: maggot-code
 * @Date: 2022-01-04 14:52:41
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-04 14:54:54
 * @Description: file content
 */
import type { Ref } from 'vue';

import { inject, ref } from 'vue';
import { FormSymbol } from '../utils';
import { Form } from '../model';

export const useForm = (): Ref<Form> => {
    const form = inject(FormSymbol, ref());

    return form as Ref<Form>;
}