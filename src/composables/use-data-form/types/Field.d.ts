/*
 * @Author: maggot-code
 * @Date: 2021-12-16 17:48:04
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 12:22:08
 * @Description: file content
 */
import type { PickSetup } from '../types/Share';
import type { SchemaMember } from '../types/Schema';

import { Field } from '../model/Field';
import { VoidField } from '../model/VoidField';

export interface IModelGetter<P = any> {
    <Getter extends (state: P) => any>(getter: Getter): ReturnType<Getter>
    (): P
}

export type ModelType = "Unknow" | "Field" | "VoidField" | ({} & string);

export type FieldGather = Field | VoidField;

export type FieldProps = SchemaMember;