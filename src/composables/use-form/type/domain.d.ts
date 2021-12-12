/*
 * @Author: maggot-code
 * @Date: 2021-12-10 15:25:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-12 22:12:39
 * @Description: file content
 */
import type { FormProps, FormItemProps } from 'naive-ui';
import type {
    NonPropertyNames,
    OptionsType,
    ComponentUnit
} from './public';

import { default as Field } from '../domain/Field';

export type {
    FormProps,
    FormItemProps
};

// 表单模型配置参数
export type FormOptions = OptionsType & {};

// 表单模型数据类型
export type FormValuesType = Record<string, any>;

// 表单模型领域对象集合
export type FormFieldes = Record<string, Field>;

export type GeneralField = Field;

// 表单领域模型配置参数
export type FieldOptions = OptionsType & {
    name: string;
    path: string;
    initialValue: any;
    value: any;
    component: ComponentUnit;
};