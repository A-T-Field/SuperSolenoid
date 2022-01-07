/*
 * @Author: maggot-code
 * @Date: 2022-01-06 18:24:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-07 09:57:35
 * @Description: file content
 */
import type { NonPropertyNames } from './share';
import type { StructNode } from './schema';

// import { Path } from '../model/Path';

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
export type BaseFieldProps = {
    // path: Path
} & Partial<
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
>;
export type VoidFieldProps = {} & Partial<
    Pick<
        StructNode,
        NonPropertyNames<OmitVoidField<Required<StructNode>>>
    >
>;