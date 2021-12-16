/*
 * @Author: maggot-code
 * @Date: 2021-12-15 23:48:42
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-16 15:44:09
 * @Description: file content
 */
import type { PickSetup } from './Public';
import type {
    FieldOptions,
    FieldVoidOptions
} from './Field';

export type SchemaMemberProps = FieldOptions & FieldVoidOptions;

export type SchemaProps = Record<string, Partial<SchemaMemberProps>>;

export type SchemaSetupExtend = {
    parentName: Nullable<string>;
    parentAddress: Nullable<string>;
    level: number;
};