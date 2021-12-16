/*
 * @Author: maggot-code
 * @Date: 2021-12-15 23:46:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-16 15:50:40
 * @Description: file content
 */
import type { SchemaProps } from '../types/Schema';

import { unref } from 'vue';
import { SchemaParser } from '../model/SchemaParser';

export {
    SchemaProps
}

export const useParser = (schema?: SchemaProps) => {
    const { getSchema } = new SchemaParser(schema ?? {});

    return unref(getSchema());
};