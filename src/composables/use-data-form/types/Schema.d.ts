/*
 * @Author: maggot-code
 * @Date: 2021-12-16 17:37:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 00:46:23
 * @Description: file content
 */
import type {
    ValueType,
    VesselProps,
    ComponentProps,
    ShareProps
} from './Share';

export type SchemaBase = ShareProps & {
    isVoid: boolean;
    isField: boolean;
    required: boolean;
    initialValue: ValueType;
    value: ValueType;
    componentProps: ComponentProps;
    vesselProps: VesselProps;
    children: Record<string, Partial<SchemaStruct>>;
};

export type SchemaMember = SchemaBase & {
    vessel: string;
    component: string;
};

export type SchemaOutput = SchemaMember & {
    key: string;
    parent: Nullable<string>;
    address: Nullable<string>;
    path: string;
    level: number;
    loading: boolean;
};

export type SchemaStruct = SchemaMember & SchemaOutput;