/*
 * @Author: maggot-code
 * @Date: 2021-12-06 16:50:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-07 23:08:19
 * @Description: file content
 */
import { default as FieldModel } from './Field';

import type { FormProps, FormItemProps } from 'naive-ui'

export type ModeType = "unknow" | "input";

export type NonFunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends (...args: any) => any ? never : K
}[keyof T];

export type ObjectStringAny = Record<string, any>;

export type DisplayType = "visable" | "hidden" | "modify" | "preview" | "disable";

export interface IFormOptions {
    display: DisplayType;
    loading: boolean;
};

export type FormValues = ObjectStringAny;

export type FormOptions = FormProps & Partial<IFormOptions>;

export type FormPickProps = Pick<FormOptions, NonFunctionPropertyNames<FormProps>>;

export type GeneralField = FieldModel;

export type FormFields = Record<string, GeneralField>;

export type FieldComponentProps = ObjectStringAny;

export interface IFieldProps<ModeType, ValueType = any> {
    key: string;
    mode: ModeType;
    display: DisplayType;
    loading: boolean;
    initialValue: ValueType;
    value: ValueType;
    title: string;
    prefix: string;
    suffix: string;
    tips: string;
    describe: string;
};

export type FieldOptions = FormItemProps & Partial<IFieldProps>;

export type FieldItemProps = Pick<FieldOptions, NonFunctionPropertyNames<FormItemProps>>;