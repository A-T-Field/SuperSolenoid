/*
 * @Author: maggot-code
 * @Date: 2021-12-13 23:38:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-14 00:26:23
 * @Description: file content
 */
import type { OmitState, NonPropertyNames } from './Public';
import type { ShareOptions } from './Share';
import type { FieldOptions } from './Field';

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
    children: SchemaOptions
}>;

export type SchemaOptions = Record<string, Partial<
    ShareOptions
    & SchemaFieldExtends
    & SchemaDefine
>>;