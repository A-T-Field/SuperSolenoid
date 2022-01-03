/*
 * @Author: maggot-code
 * @Date: 2022-01-03 14:05:19
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-03 22:52:02
 * @Description: file content
 */
export type ValueType<T = any> = string | number | boolean | Array<T> | Record<string, T> | T;

export type DisplayType = "visable" | "hidden" | ({} & string);

export type InteractType = "modify" | "preview" | "disable" | ({} & string);

export interface IShareProps {
    display?: DisplayType;
    interact?: InteractType;
    loading?: boolean;
    // onBeforeMount: () => void;
    // onBeforeUnmount: () => void;
}

export interface IFormProps extends IShareProps { }

export interface IBaseFieldProps extends IShareProps {
    componentType?: any;
    componentProps?: Record<string, any>;
    vesselType?: any;
    vesselProps?: Record<string, any>;
    required?: boolean;
}

export interface IFieldProps extends IBaseFieldProps {
    name?: string;
    value?: ValueType;
    defaultValue?: ValueType;
    dataSource?: Record<string, any>;
    title?: string;
    explain?: string;
    tips?: string;
    prefix?: string;
    suffix?: string;
    beforePrefix?: string;
    afterSuffix?: string;
}