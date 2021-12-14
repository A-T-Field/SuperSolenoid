/*
 * @Author: maggot-code
 * @Date: 2021-12-13 23:38:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-14 13:44:42
 * @Description: file content
 */
import type { FieldOptions } from './Field';
import type { VesselNodeProps } from './Vessel';

export type SchemaDefine = Partial<{
    vessel: any;
    vesselProps: Record<string, any>;
    component: any;
    componentProps: Record<string, any>;
    children: SchemaIterator;
}>;

export type SchemaMemberOptions = Partial<
    FieldOptions
    & SchemaDefine
>;

export type SchemaOptions = Record<string, SchemaMemberOptions>;

export type SchemaMemberIterator = SchemaMemberOptions & VesselNodeProps;

export type SchemaIterator = Record<string, SchemaMemberIterator>;