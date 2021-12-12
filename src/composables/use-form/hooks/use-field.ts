/*
 * @Author: maggot-code
 * @Date: 2021-12-12 22:11:16
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-12 22:54:30
 * @Description: file content
 */
import type { Ref } from 'vue';
import type { GeneralField } from '../type/domain';

import { inject, ref, toRaw } from 'vue';
import { FieldSymbol } from '../public/context';

export const useField = <T = GeneralField>(): Ref<T> => {
    return inject(FieldSymbol, ref()) as any;
}

export const useComponent = (props) => {
    return [toRaw(props.component[0]), props.component[1]];
}