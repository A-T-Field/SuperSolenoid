/*
 * @Author: maggot-code
 * @Date: 2021-12-16 12:56:13
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-16 16:31:55
 * @Description: file content
 */
import type { FieldGather, FieldProps, FieldVoidProps } from '../types/Field';

export type FormUnrealDOMNode = Partial<FieldProps & FieldVoidProps>;

export type FormUnrealDOMTree = Record<string, FormUnrealDOMNode>;

export type FormProps = Partial<{
    schema: FormUnrealDOMTree
}>;

export type FormGraph = Record<string, FieldGather>;