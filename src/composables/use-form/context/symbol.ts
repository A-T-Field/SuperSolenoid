/*
 * @Author: maggot-code
 * @Date: 2021-12-14 10:39:07
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-14 15:03:58
 * @Description: file content
 */
import type { InjectionKey, Ref } from 'vue';

import { Form } from '../model/Form';
import { Field } from '../model/Field';

export const FormSymbol: InjectionKey<Ref<Form>> = Symbol('form');
export const FieldSymbol: InjectionKey<Ref<Field>> = Symbol('field');