/*
 * @Author: maggot-code
 * @Date: 2022-01-03 14:05:19
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-05 10:48:54
 * @Description: file content
 */
import { Field } from './Field';
import { VoidField } from './VoidField';

export type OmitState<P> = Omit<
    P,
    "unknow"
    | "basePath"
>;

export type NonPropertyNames<T> = {
    [K in keyof T]: T[K] extends (...args: any) => any ? never : K
}[keyof T];

export type PickSetup<T> = Partial<
    Pick<
        T,
        NonPropertyNames<
            OmitState<T>
        >
    >
>;

export type GatherFields = Field | VoidField;

export type PathPattern = string;

export type DisplayType = "visable" | "hidden" | ({} & string);

export type InteractType = "modify" | "preview" | "disable" | ({} & string);

export type DataSourceType = Array<{
    label: string;
    value: string | number | boolean | ({} & string);
    children?: DataSourceType;
    [key: string]: any;
}>;

export interface IPathProps {
    basePath: PathPattern;
}

export interface IShareProps {
    loading?: boolean;
    display?: DisplayType;
    interact?: InteractType;
    // onBeforeMount:()=>void;
    // onBeforeUnmount:()=>void;
}

export interface IFormProps extends IShareProps { }

export interface ICreatedField<V = string | number | boolean | undefined | null> {
    (props: IFieldProps<V>): Field<V>;
}

export interface ICreatedVoidField {
    (props: IVoidFieldProps): VoidField;
}

export interface IFieldProps<ValueType = any> extends IShareProps {
    basePath?: string;
    key?: string;
    title?: string;
    explain?: string;
    tips?: string;
    prefix?: string;
    suffix?: string;
    beforePrefix?: string;
    afterSuffix?: string;
    value?: ValueType;
    defaultValue?: ValueType;
    dataSource?: DataSourceType;
}

export interface IVoidFieldProps extends IShareProps {
    basePath?: string;
    key?: string;
}

export interface IStructNode {
    field: GatherFields;
    record?: number;
    children?: StructNodeTree;
    [key: string]: any;
}

export type StructNodeTree = Record<string, IStructNode>;