/*
 * @Author: maggot-code
 * @Date: 2021-12-13 23:38:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-14 11:39:29
 * @Description: file content
 */
import type { OmitState, NonPropertyNames } from './Public';
import type { ShareOptions } from './Share';
import type { FieldOptions } from './Field';
import type { VesselNodeProps } from './Vessel';

type parentNode = Nullable<string>;

type prevNode = Nullable<string>;

type nextNode = Nullable<string>;

export type IteratorCache = [parentNode, prevNode, nextNode];

export type SchemaFieldExtends = Partial<
    Pick<
        FieldOptions,
        NonPropertyNames<OmitState>
    >
>;

export type SchemaDefine = Partial<{
    vessel: any;
    vesselProps: Record<string, any>;
    component: any;
    componentProps: Record<string, any>;
    children: SchemaOptions | SchemaIterator;
}>;

export type SchemaMemberOptions = Partial<
    ShareOptions
    & SchemaFieldExtends
    & SchemaDefine
>;

export type SchemaOptions = Record<string, SchemaMemberOptions>;

export type SchemaMemberIterator = SchemaMemberOptions & VesselNodeProps;

export type SchemaIterator = Record<string, SchemaMemberIterator>;