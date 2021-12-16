/*
 * @Author: maggot-code
 * @Date: 2021-12-16 18:00:08
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 00:46:41
 * @Description: file content
 */
import type {
    SchemaMember,
    SchemaOutput,
    SchemaStruct
} from '../types/Schema';

import { isNil } from '@/utils/is';

type ParserExtend = {
    parent: Nullable<string>;
    address: Nullable<string>;
    level: number;
};

const hasChild = (children?: Record<string, Partial<SchemaStruct>>) => {
    if (isNil(children)) return false;

    return Object.keys(children).length > 0;
};

const setupStruct = (key: string, schema: Partial<SchemaMember>, extend: ParserExtend): SchemaOutput => {
    const path = key;
    const parent = isNil<string>(extend.parent) ? null : extend.parent;
    const address = isNil<string>(extend.address) ? path : `${extend.address}.${path}`;
    const level = extend.level;
    return {
        key,
        parent,
        address,
        path,
        level,
        loading: false,
        display: schema.display ?? "hidden",
        interact: schema.interact ?? "disable",
        vessel: schema.vessel ?? "",
        vesselProps: schema.vesselProps ?? {},
        component: schema.component ?? "",
        componentProps: schema.componentProps ?? {},
        isVoid: schema.isVoid ?? false,
        isField: schema.isField ?? false,
        required: schema.required ?? false,
        initialValue: schema.initialValue,
        value: schema.value,
        children: {}
    };
};

export const useParser = (schemata?: Record<string, Partial<SchemaStruct>>, extend?: ParserExtend) => {
    const setupExtend: ParserExtend = extend ?? {
        parent: null,
        address: null,
        level: 0
    };

    const data: Record<string, SchemaStruct> = {};

    for (const key in schemata) {
        const schema = schemata[key];
        const { isVoid, isField, children } = schema;
        const isChild = hasChild(children);

        if (isVoid) {
            const voidField = setupStruct(key, schema, setupExtend);

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
            data[key] = setupStruct(key, schema, setupExtend);
        }
    }

    return data;
};