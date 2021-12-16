/*
 * @Author: maggot-code
 * @Date: 2021-12-16 17:37:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-16 18:40:02
 * @Description: file content
 */
import type { FieldSchema, FieldVoidSchema } from './Field';

export type SchemaMember = Partial<FieldSchema & FieldVoidSchema>;

export type SchemaStruct = Record<string, Partial<SchemaMember>>;