/*
 * @Author: maggot-code
 * @Date: 2021-12-14 12:43:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-14 16:54:39
 * @Description: file content
 */
import type { SchemaOptions, SchemaIterator } from './types/Schema';
import type { FormOptions } from './types/Form';

import { Schema } from './model/Schema';
import { Form } from './model/Form';

import { default as FormPatch } from './component/FormPatch';
import { default as FormRecursion } from './component/FormRecursion';
import { default as FormProvider } from './component/FormProvider';
import { default as FormField } from './component/FormField';
import { default as FormVoidField } from './component/FormVoidField';

export {
    FormPatch,
    FormRecursion,
    FormProvider,
    FormField,
    FormVoidField,
}

export const schemaParser = (unitData?: SchemaOptions) => {
    const schema = new Schema(unitData ?? {});

    return schema.schemaIterator as SchemaIterator;
}

export const createForm = (options?: Partial<FormOptions>) => {
    const form = new Form(options ?? {});

    return form;
}