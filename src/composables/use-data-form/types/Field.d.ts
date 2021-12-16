/*
 * @Author: maggot-code
 * @Date: 2021-12-16 17:48:04
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-16 19:24:19
 * @Description: file content
 */
import type {
    ValueType,
    VNodeComponent,
    VesselProps,
    ComponentProps,
    ShareProps
} from '../types/Share';
import type { SchemaStruct } from '../types/Schema';

export type FieldBaseSchema = ShareProps & {
    isVoid: boolean;
    isField: boolean;
    component: string;
    componentProps: ComponentProps;
};

export type FieldSchema = FieldBaseSchema & {
    required: boolean;
    initialValue: ValueType;
    value: ValueType;
    vessel: string;
    vesselProps: VesselProps;
};

export type FieldVoidSchema = FieldBaseSchema & {
    children: SchemaStruct
};

export type FieldBaseProps = ShareProps & {
    isVoid: boolean;
    isField: boolean;
    key: string;
    parent: Nullable<string>;
    path: string;
    address: Nullable<string>;
    level: number;
    loading: boolean;
    component: VNodeComponent;
    componentProps: ComponentProps;
};

export type FieldProps = FieldBaseProps & {
    required: boolean;
    initialValue: ValueType;
    value: ValueType;
    vessel: VNodeComponent;
    vesselProps: VesselProps;
};

export type FieldVoidProps = FieldBaseProps & {
    children: FieldTree;
};

export type FieldTree = Record<string, Partial<FieldProps & FieldVoidProps>>;