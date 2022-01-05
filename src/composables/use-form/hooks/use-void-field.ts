/*
 * @Author: maggot-code
 * @Date: 2022-01-04 14:58:04
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-04 14:58:05
 * @Description: file content
 */
import type { Ref } from 'vue';

import { inject, ref } from 'vue';
import { VoidFieldSymbol } from '../utils';
import { VoidField } from '../model';

export const useVoidField = (): Ref<VoidField> => {
    const voidField = inject(VoidFieldSymbol, ref());

    return voidField as Ref<VoidField>;
}