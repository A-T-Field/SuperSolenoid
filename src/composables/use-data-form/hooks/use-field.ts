/*
 * @Author: maggot-code
 * @Date: 2021-12-09 09:44:44
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-09 17:39:27
 * @Description: file content
 */
import type { Ref } from 'vue';
import type { GeneralField } from '../domain/type';

import { inject, ref } from 'vue';
import { FieldSymbol } from '../public';

export const useField = <T = GeneralField>(): Ref<T> => {
    return inject(FieldSymbol, ref()) as any;
}