/*
 * @Author: maggot-code
 * @Date: 2021-12-14 15:09:02
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-14 15:10:17
 * @Description: file content
 */
import type { Ref } from 'vue';

import { inject, ref } from 'vue';
import { Field } from '../model/Field';
import { FieldSymbol } from '../context/symbol';

export const useField = <T = Field>(): Ref<T> => {
    return inject(FieldSymbol, ref()) as unknown as Ref<T>;
}