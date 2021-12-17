/*
 * @Author: maggot-code
 * @Date: 2021-12-16 17:48:04
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 09:42:43
 * @Description: file content
 */
import type { PickSetup } from '../types/Share';
import type { SchemaMember } from '../types/Schema';

export type ModelType = "Unknow" | "Field" | "VoidField" | ({} & string);

export type FieldProps = SchemaMember;