/*
 * @Author: maggot-code
 * @Date: 2022-01-06 18:24:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-11 09:51:28
 * @Description: file content
 */
import type { NonPropertyNames } from './share';
import type { StructNode } from './schema';

type OmitBaseField<P> = Omit<
    P,
    "type"
    | "value"
    | "defaultValue"
    | "dataSource"
    | "title"
    | "explain"
    | "tips"
    | "prefix"
    | "suffix"
    | "beforePrefix"
    | "afterSuffix"
    | "componentType"
    | "componentProps"
    | "children"
>;
export type BaseFieldProps = {} & Partial<
    Pick<
        StructNode,
        NonPropertyNames<OmitBaseField<Required<StructNode>>>
    >
>;

type OmitField<P> = Omit<
    P,
    "children"
    | "value"
    | "defaultValue"
>;
export type FieldProps<ValueType = any> = {
    value?: ValueType;
    defaultValue?: ValueType;
} & Partial<
    Pick<
        StructNode,
        NonPropertyNames<OmitField<Required<StructNode>>>
    >
>;

type OmitVoidField<P> = Omit<
    P,
    "type"
    | "value"
    | "defaultValue"
    | "dataSource"
    | "title"
    | "explain"
    | "tips"
    | "prefix"
    | "suffix"
    | "beforePrefix"
    | "afterSuffix"
    | "componentType"
    | "componentProps"
    | "children"
>;
export type VoidFieldProps = {} & Partial<
    Pick<
        StructNode,
        NonPropertyNames<OmitVoidField<Required<StructNode>>>
    >
>;