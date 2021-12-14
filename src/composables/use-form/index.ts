/*
 * @Author: maggot-code
 * @Date: 2021-12-14 12:43:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-14 14:49:27
 * @Description: file content
 */
import type { SchemaOptions, SchemaIterator } from './types/Schema';
import type { FormOptions } from './types/Form';

import { Schema } from './model/Schema';
import { Form } from './model/Form';

export const schemaParser = (unitData?: SchemaOptions) => {
    const schema = new Schema(unitData ?? {});

    return schema.schemaIterator as SchemaIterator;
}

export const createForm = (options?: Partial<FormOptions>) => {
    const form = new Form(options ?? {});

    return form;
}