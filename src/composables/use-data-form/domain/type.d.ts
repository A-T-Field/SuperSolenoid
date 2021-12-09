/*
 * @Author: maggot-code
 * @Date: 2021-12-06 16:50:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-09 14:27:45
 * @Description: file content
 */
import { default as FieldModel } from './Field';

import type { FormProps, FormItemProps } from 'naive-ui'

// 功能性类型
export type NonFunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends (...args: any) => any ? never : K
}[keyof T];

// 功能性类型
export type ObjectStringAny = Record<string, any>;

// 展示类型
export type DisplayType = "visable" | "hidden" | "modify" | "preview" | "disable";

// 状态类型
export type StatusType = {
    display: DisplayType;
    loading: boolean;
}

// 表单子域模型集合类型
export type GeneralField = FieldModel;

// 表单子域模型实例集合类型
export type FormFields = Record<string, GeneralField>;

// 表单子域组件实例类型
export type FieldComponent<
    Component = any,
    ComponentProps = any
    > = [Component] | [Component, ComponentProps] | boolean | any[];

// 表单子域容器扩展类型
export type FieldVesselExtends = {
    prefix: string;
    suffix: string;
    tips: string;
    describe: string;
}

// 表单子域选项扩展类型
export type FieldOptionExtends<C> = StatusType & {
    name: string;
    mode: string;
    initialValue: any;
    value: any;
    component: FieldComponent<C>
};

// 表单子域选项类型
export type FieldOptions<
    Component = any
    > = FormItemProps
    & Partial<FieldOptionExtends<Component>>
    & Partial<FieldVesselExtends>;

// 表单容器原始UI Props类型
export type FieldItemPickProps = Pick<FieldOptions<any>, NonFunctionPropertyNames<FormItemProps>>;

// 表单数值集合类型
export type FormValues = ObjectStringAny;

// 表单选项扩展类型
export type FormOptionExtends = StatusType & {};

// 表单选项类型
export type FormOptions = FormProps & Partial<FormOptionExtends>;

// 表单原始UI Props类型
export type FormPickProps = Pick<FormOptions, NonFunctionPropertyNames<FormProps>>;