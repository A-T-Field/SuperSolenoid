/*
 * @Author: maggot-code
 * @Date: 2021-12-08 16:29:50
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-08 17:47:49
 * @Description: file content
 */
import type {
    InjectionKey,
    Ref
} from 'vue';

import { default as FormModel } from './domain/Form';
import { default as FieldModel } from './domain/Field';

export const FormSymbol: InjectionKey<Ref<FormModel>> = Symbol("form");

export const FieldSymbol: InjectionKey<Ref<FieldModel>> = Symbol("field");