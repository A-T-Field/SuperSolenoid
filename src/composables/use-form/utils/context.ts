/*
 * @Author: maggot-code
 * @Date: 2022-01-04 14:50:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-12 15:54:58
 * @Description: file content
 */
import type { InjectionKey, Ref } from 'vue';

import {
    Form,
    Field,
    VoidField
} from '../model';

export const FormSymbol: InjectionKey<Ref<Form>> = Symbol("form");

export const FieldSymbol: InjectionKey<Ref<Field>> = Symbol("Field");

export const VoidFieldSymbol: InjectionKey<Ref<VoidField>> = Symbol("VoidField");