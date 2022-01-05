/*
 * @Author: maggot-code
 * @Date: 2022-01-05 16:38:05
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-05 16:41:47
 * @Description: file content
 */
import type { Ref } from 'vue';

import { inject, ref } from 'vue';
import { GeneralField } from '@formily/core';
import { FieldSymbol } from '../shared';

export const useField = <T = GeneralField>(): Ref<T> => {
    return inject(FieldSymbol, ref()) as unknown as Ref<T>;
}