/*
 * @Author: maggot-code
 * @Date: 2022-01-04 14:55:13
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-04 14:57:51
 * @Description: file content
 */
import type { Ref } from 'vue';

import { inject, ref } from 'vue';
import { FieldSymbol } from '../utils';
import { Field } from '../model';

export const useField = (): Ref<Field> => {
    const field = inject(FieldSymbol, ref());

    return field as Ref<Field>;
}