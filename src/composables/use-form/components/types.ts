/*
 * @Author: maggot-code
 * @Date: 2022-01-04 14:27:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-05 13:43:28
 * @Description: file content
 */
import type { ExtractPropTypes } from 'vue';
import type {
    PickSetup,
    IFieldProps,
    IVoidFieldProps
} from '../model';

import {
    formProviderProps,
    formRecursionProps
} from './props';

export type SchemaUnitType = "void"
    | "string"
    | "number"
    | "boolean"
    | "null"
    | "undefined"
    | "array"
    | "object"
    | ({} & string);

export type SchemaRaw = PickSetup<IFieldProps | IVoidFieldProps> & {
    type: SchemaUnitType;
    children?: FormSchema;
    [key: string]: any;
};

export type FormSchema = Record<string | number, SchemaRaw>;

export type FormProviderSetupProps = ExtractPropTypes<typeof formProviderProps>;

export type FormRecursionSetupProps = ExtractPropTypes<typeof formRecursionProps>;