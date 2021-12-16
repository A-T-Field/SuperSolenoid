/*
 * @Author: maggot-code
 * @Date: 2021-12-15 23:44:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-16 16:18:03
 * @Description: file content
 */
import type { SchemaSetupExtend, SchemaMemberProps, SchemaProps } from '../types/Schema';
import type { FormUnrealDOMTree, FormUnrealDOMNode } from '../types/Form';
import type { FieldGather } from '../types/Field';

import { unref, reactive, computed } from 'vue';
import { isNil } from '@/utils/is';

class SchemaParser {
    protected _DOMTree: FormUnrealDOMTree = reactive({});

    constructor(schema: SchemaProps) {
        this.initialization(schema);
    }

    protected initialization(schema: SchemaProps) {
        this._DOMTree = this.setupDOMTree(schema, {
            parentName: null,
            parentAddress: null,
            level: 0
        });
    }

    protected setupDOMTree(schema: SchemaProps, extend: SchemaSetupExtend): FormUnrealDOMTree {
        const data: FormUnrealDOMTree = {};

        for (const name in schema) {
            const { children, model } = schema[name];

            const isVoid = this.isVoidField(model);

            const node = this.setupDOMNode(name, schema[name], extend);

            const level = node.level ?? 0;

            if (isVoid && children && Object.keys(children).length > 0) {
                node.children = this.setupDOMTree(children, {
                    parentName: node.key ?? null,
                    parentAddress: node.address ?? null,
                    level: level + 1
                })
            }

            data[name] = node;
        }

        return data;
    }

    protected setupDOMNode(name: string, node: Partial<SchemaMemberProps>, extend: SchemaSetupExtend) {
        const { parentName, parentAddress, level } = extend;

        const fieldProps: FormUnrealDOMNode = Object.assign({}, node, {
            key: name,
            parentName: isNil(parentName) ? null : parentName,
            path: name,
            address: isNil(parentAddress) ? name : `${parentAddress}.${name}`,
            level: level
        });

        return fieldProps;
    }

    protected isVoidField(modelName?: FieldGather) {
        return modelName === "VoidField";
    }

    get DOMTree() {
        return unref(this._DOMTree);
    }

    getSchema = () => computed(() => this.DOMTree)
}

export {
    SchemaParser
}