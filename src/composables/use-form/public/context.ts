/*
 * @Author: maggot-code
 * @Date: 2021-12-12 22:08:29
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-12 22:10:15
 * @Description: file content
 */
import type { InjectionKey, Ref } from 'vue';

import { default as FormModel } from '../domain/Form';
import { default as Field } from '../domain/Field';

export const FormSymbol: InjectionKey<Ref<FormModel>> = Symbol("form");

export const FieldSymbol: InjectionKey<Ref<Field>> = Symbol("field");