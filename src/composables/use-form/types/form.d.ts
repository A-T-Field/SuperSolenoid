/*
 * @Author: maggot-code
 * @Date: 2021-12-02 12:32:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-02 17:17:20
 * @Description: file content
 */
import type { ComputedRef } from 'vue';
import type { FormProps, FormInst } from 'naive-ui';
import type { displayType } from './attribute';
import type { FormSchema, FormSchemata } from './schema';

export type {
    FormInst
};

export interface FormOptions extends FormProps {
    readonly display?: displayType;
    readonly labelWidth?: number;
    schema?: FormSchema | FormSchemata;
};

export type FormProps = ComputedRef<FormOptions>;

export type FormBase = {} & FormInst;

export type FormBaseNull = Nullable<FormInst>;