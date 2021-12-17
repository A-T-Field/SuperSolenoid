/*
 * @Author: maggot-code
 * @Date: 2021-12-17 14:56:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 17:10:36
 * @Description: file content
 */
import type { ExtractPropTypes } from 'vue';

import {
    formProviderProps,
    formSchemaProps,
    fieldProps,
    voidFieldProps,
} from '../public/props';

export type FormProviderSetupProps = ExtractPropTypes<typeof formProviderProps>;

export type FormSchemaSetupProps = ExtractPropTypes<typeof formSchemaProps>;

export type FieldSetupProps = ExtractPropTypes<typeof fieldProps>;

export type VoidFieldSetupProps = ExtractPropTypes<typeof voidFieldProps>;