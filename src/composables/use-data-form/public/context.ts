/*
 * @Author: maggot-code
 * @Date: 2021-12-17 14:57:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 14:59:33
 * @Description: file content
 */
import type { InjectionKey, Ref } from 'vue';

import { Form } from '../model/Form';
import { Field } from '../model/Field';
import { VoidField } from '../model/VoidField';

export const FormSymbol: InjectionKey<Ref<Form>> = Symbol("form");

export const FieldSymbol: InjectionKey<Ref<Field>> = Symbol("field");

export const VoidFieldSymbol: InjectionKey<Ref<VoidField>> = Symbol("voidField");
