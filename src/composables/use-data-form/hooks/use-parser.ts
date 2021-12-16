/*
 * @Author: maggot-code
 * @Date: 2021-12-16 18:00:08
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-16 19:36:01
 * @Description: file content
 */
import type { SchemaStruct } from '../types/Schema';
import type {
    FieldSchema,
    FieldVoidSchema,
    FieldProps,
    FieldVoidProps,
    FieldTree
} from '../types/Field';

import { isNil } from '@/utils/is';

type ParserExtend = {
    parent: Nullable<string>;
    address: Nullable<string>;
    level: number;
};

const hasChild = (children?: SchemaStruct) => {
    if (isNil(children)) return false;

    return Object.keys(children).length > 0;
};

const setupVoidField = (key: string, schema: Partial<FieldVoidSchema>, extend: ParserExtend): FieldVoidProps => {
    const parent = isNil<string>(extend.parent) ? null : extend.parent;
    const path = key;
    const address = isNil<string>(extend.address) ? path : `${extend.address}.${path}`;
    const level = extend.level;
    return {
        display: schema.display ?? "visable",
        interact: schema.interact ?? "modify",
        isVoid: schema.isVoid ?? false,
        isField: schema.isField ?? false,
        component: schema.component,
        componentProps: schema.componentProps ?? {},
        key,
        parent,
        path,
        address,
        level,
        loading: false,
        children: {}
    };
};

const setupField = (key: string, schema: Partial<FieldSchema>, extend: ParserExtend): FieldProps => {
    const parent = isNil<string>(extend.parent) ? null : extend.parent;
    const path = key;
    const address = isNil<string>(extend.address) ? path : `${extend.address}.${path}`;
    const level = extend.level;
    return {
        display: schema.display ?? "visable",
        interact: schema.interact ?? "modify",
        isVoid: schema.isVoid ?? false,
        isField: schema.isField ?? false,
        required: schema.required ?? false,
        component: schema.component,
        componentProps: schema.componentProps ?? {},
        vessel: schema.vessel,
        vesselProps: schema.vesselProps ?? {},
        key,
        parent,
        path,
        address,
        level,
        loading: false,
        initialValue: schema.initialValue,
        value: schema.value
    };
};

export const useParser = (schemata?: SchemaStruct, extend?: ParserExtend): FieldTree => {
    const setupExtend: ParserExtend = extend ?? {
        parent: null,
        address: null,
        level: 0
    };
    console.log(setupExtend);

    const data: SchemaStruct = {};

    for (const key in schemata) {
        const schema = schemata[key];
        const { isVoid, isField, children } = schema;
        const isChild = hasChild(children);

        if (isVoid) {
            const voidField = setupVoidField(key, schema, setupExtend);
            if (isChild) {
                voidField.children = useParser(children, {
                    parent: voidField.key,
                    address: voidField.address,
                    level: voidField.level + 1
                });
            }
            data[key] = voidField;
            continue;
        }

        if (isField) {
            data[key] = setupField(key, schema, setupExtend);
        }
    }

    return data;
};