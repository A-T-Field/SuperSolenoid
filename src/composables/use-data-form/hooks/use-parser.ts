/*
 * @Author: maggot-code
 * @Date: 2021-12-16 18:00:08
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 13:27:24
 * @Description: file content
 */
import type {
    SchemaMember,
    SchemaStruct
} from '../types/Schema';

import { isNil } from '@/utils/is';

type ParserExtend = {
    parent: Nullable<string>;
    address: Nullable<string>;
    level: number;
};

const hasChild = (children?: SchemaStruct<Partial<SchemaMember>>) => {
    if (isNil(children)) return false;

    return Object.keys(children).length > 0;
};

const setupStruct = (key: string, schema: Partial<SchemaMember>, extend: ParserExtend): SchemaMember => {
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
        loading: schema.loading ?? false,
        required: schema.required ?? false,
        modelType: schema.modelType ?? "Unknow",
        display: schema.display ?? "hidden",
        interact: schema.interact ?? "disable",
        sort: schema.sort ?? level * 10,
        initialValue: schema.initialValue,
        value: schema.value,
        vessel: schema.vessel ?? "",
        vesselProps: schema.vesselProps ?? {},
        component: schema.component ?? "",
        componentProps: schema.componentProps ?? {},
        children: {}
    };
};

export const useParser = (
    schemata?: SchemaStruct<Partial<SchemaMember>>,
    extend?: ParserExtend
): SchemaStruct => {
    const setupExtend: ParserExtend = extend ?? {
        parent: null,
        address: null,
        level: 0
    };

    const data: SchemaStruct = {};

    for (const key in schemata) {
        const schema = schemata[key];
        const { modelType, children } = schema;
        const isChild = hasChild(children);

        if (modelType === "VoidField") {
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

        if (modelType === "Field") {
            data[key] = setupStruct(key, schema, setupExtend);
        }
    }

    return data;
};