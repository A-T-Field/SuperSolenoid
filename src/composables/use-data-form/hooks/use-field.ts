/*
 * @Author: maggot-code
 * @Date: 2021-12-17 15:03:55
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 15:05:59
 * @Description: file content
 */
import type { Ref } from 'vue';
import type { FieldGather } from '../types/Field';

import { inject, ref } from 'vue';
import { FieldSymbol } from '../public/context';

export const useField = <T = FieldGather>(): Ref<T> => {
    const field = inject(FieldSymbol, ref());

    return field as any as Ref<T>;
};