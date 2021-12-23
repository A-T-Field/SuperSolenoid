/*
 * @Author: maggot-code
 * @Date: 2021-12-16 17:48:04
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-20 14:20:11
 * @Description: file content
 */
import type { PickSetup } from '../types/Share';
import type { SchemaMember } from '../types/Schema';

import { Field } from '../model/Field';
import { VoidField } from '../model/VoidField';

export type ModelType = "Unknow" | "Field" | "VoidField" | ({} & string);

export type FieldGather = Field | VoidField;

export type FieldProps = SchemaMember;