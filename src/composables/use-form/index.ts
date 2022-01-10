/*
 * @Author: maggot-code
 * @Date: 2021-12-31 09:30:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-10 15:13:40
 * @Description: file content
 */
import type { IFormProps, SchemaProps } from './types';

import { Form, Schema } from './model';
export const createForm = (props?: IFormProps) => {
    return new Form(props ?? {});
}

export const compileSchema = (props?: SchemaProps) => {
    return Schema.parsers(props?.$schema ?? []).compiler();
}

export * from './types';
export * from './hooks';
export * from './utils';
export * from './model';
export * from './components';