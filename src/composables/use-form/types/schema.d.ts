/*
 * @Author: maggot-code
 * @Date: 2021-12-02 17:12:02
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-02 18:20:07
 * @Description: file content
 */
import type { FormItemProps } from 'naive-ui';
import type { fieldName } from './attribute';

export interface Formunit {
    field?: fieldName;
    mode?: string;
    value?: any;
    defaultValue?: any;
};

export interface Formvessel extends FormItemProps {
    tips?: string;
    describe?: string;
    prefix?: string;
    suffix?: string;
};

export type FormSchema = {
    vessel?: Formvessel;
} & Formunit;

export type FormSchemata = Array<FormSchema>;

export type FormSchemaMap = Map<fieldName, FormSchema>;