/*
 * @Author: maggot-code
 * @Date: 2022-01-05 17:53:19
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-06 17:43:01
 * @Description: file content
 */
import type {
    ISchema,
    SchemaStruct,
    StructNode,
    StructTree
} from '../types/schema';

import { ref, reactive } from 'vue';
import {
    isValid,
    isVoid,
    isArray,
    isNumber,
    isString,
    isBoolean,
    isEmpty,
    each,
    uid
} from '../utils';

const BASE_KEY = 'root';

const MAX_CACHE_SIZE = 500;

const getHasOwnProperty = <T = any>(obj: T, property: any) => Object.prototype.hasOwnProperty.call(obj, property);

const isFlase = (state: any): state is boolean => isBoolean(state) ? state === false ? true : false : false;

function setupParent(raw: ISchema, rootKey: string) {
    const { parent } = raw;

    if (isVoid(parent)) return rootKey;

    if (isValid(parent) && !isEmpty(parent) && (isNumber(parent) ||
        (isString(parent) && parent !== rootKey)
    )) return parent;

    return false;
}

function setupVoid(raw: ISchema) {
    const { hasVoid } = raw;

    return isBoolean(hasVoid) ? hasVoid : true;
}

function setupSort(raw: ISchema) {
    const { sort } = raw;

    return isNumber(sort) ? sort : 0;
}

function setupKeyword(raw: ISchema) {
    const { keyword } = raw;

    return isString(keyword) || isNumber(keyword) ? keyword : uid();
}

function setupAddress(target: StructTree, keyword: string | number, parent: string | number) {
    return getHasOwnProperty(target, parent)
        ? `${target[parent].address}.${keyword}`
        : `${parent}.${keyword}`;
}

function setupChildren(target: StructTree, keyword: string | number) {
    return getHasOwnProperty(target, keyword)
        ? target[keyword].children
        : {};
}

class Schema {
    // private MAX_Level: number = 0;
    private TempCache: StructTree = {};

    protected rootKey!: string;
    protected schemaUnit: SchemaStruct = [];
    structTree = reactive<StructTree>({});
    changeRecord = ref(Date.now());

    constructor(struct: SchemaStruct, rootKey?: string) {
        this.initialization(struct, rootKey);
    }

    protected initialization(struct: SchemaStruct, rootKey?: string) {
        this.schemaUnit = struct;
        this.rootKey = rootKey ?? BASE_KEY;
    }

    compiler() {
        if (Object.keys(this.TempCache).length >= MAX_CACHE_SIZE) this.TempCache = {};

        each(this.schemaUnit, (raw, index) => {
            const parent = setupParent(raw, this.rootKey);

            if (isFlase(parent)) return;

            const hasVoid = setupVoid(raw);

            const sort = setupSort(raw);

            const keyword = setupKeyword(raw);

            this.TempCache[keyword] = {
                ...raw,
                parent,
                hasVoid,
                sort,
                address: setupAddress(this.TempCache, keyword, parent),
                children: setupChildren(this.TempCache, keyword)
            } as StructNode;

            if (parent === this.rootKey) {
                this.structTree[keyword] = {
                    ...this.TempCache[keyword],
                };
            } else {
                if (!getHasOwnProperty(this.TempCache, parent)) {
                    this.TempCache[parent] = { children: {} } as StructNode;
                }

                this.TempCache[parent].children[keyword] = this.TempCache[keyword];
            }
        });

        this.changeRecord.value = Date.now();

        return this;
    }

    push(schemaRaw: SchemaStruct | ISchema) {
        const schema = isArray(schemaRaw) ? schemaRaw : [schemaRaw];

        this.schemaUnit.push(...schema);

        this.compiler();
    }

    static parsers(struct: SchemaStruct, rootKey?: string) {
        return new Schema(struct, rootKey ?? BASE_KEY);
    }
}

export {
    Schema
}