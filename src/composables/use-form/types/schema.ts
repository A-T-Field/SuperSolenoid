/*
 * @Author: maggot-code
 * @Date: 2022-01-06 10:42:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-06 18:40:28
 * @Description: file content
 */
import type {
    ElementComponent,
    CheckValueType,
    RequestType,
    DisplayType,
    InteractType
} from './share';

export type DataSourceRaw = {
    type: CheckValueType;
    label: string;
    value: any;
    extra: Record<string, any>;
    children?: DataSourceType;
};

export type DataSourceType = Array<Partial<DataSourceRaw>>;

export type ActionRaw = Partial<RequestType> & {
    async: boolean;
    depend: string;
    condition: string;
};

export type DefineAction = Partial<ActionRaw> | Array<Partial<ActionRaw>>;

export interface ISchema {
    type?: CheckValueType;
    parent?: string | number;
    keyword: string | number;
    value?: any;
    defaultValue?: any;
    dataSource?: DataSourceType;
    display?: DisplayType;
    interact?: InteractType;
    title?: string;
    explain?: string;
    tips?: string;
    prefix?: string;
    suffix?: string;
    beforePrefix?: string;
    afterSuffix?: string;
    hasVoid?: boolean;
    required?: boolean;
    sort?: number;
    componentType?: ElementComponent;
    componentProps?: Record<string, any>;
    vesselType?: ElementComponent;
    vesselProps?: Record<string, any>;
    $action?: DefineAction;
};

export type SchemaStruct = Array<ISchema>;

export type SchemaProps = Partial<RequestType> & Partial<{
    submitValidate: boolean;
    $schema: SchemaStruct;
}>;

export type StructNode = ISchema & {
    address: string;
    children: StructTree;
};

export type StructTree = Record<string, StructNode>;