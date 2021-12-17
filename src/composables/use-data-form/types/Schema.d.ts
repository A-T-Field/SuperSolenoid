/*
 * @Author: maggot-code
 * @Date: 2021-12-16 17:37:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 11:15:04
 * @Description: file content
 */
import type {
    ValueType,
    VesselProps,
    ComponentProps,
    ShareProps
} from './Share';
import type { ModelType } from './Field';

export type SchemaBase = ShareProps & {
    modelType: ModelType;
    sort: number;
    required: boolean;
    initialValue: ValueType;
    value: ValueType;
    vessel: string;
    vesselProps: VesselProps;
    component: string;
    componentProps: ComponentProps;
};

export type SchemaMember = SchemaBase & {
    key: string;
    parent: Nullable<string>;
    address: string;
    path: string;
    level: number;
    children: SchemaStruct<Partial<SchemaMember>>;
};

export type SchemaStruct<ST = SchemaMember> = Record<string, ST>;