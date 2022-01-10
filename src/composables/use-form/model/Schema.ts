/*
 * @Author: maggot-code
 * @Date: 2022-01-05 17:53:19
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-09 22:47:50
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
    uid,
    getHasOwnProperty,
} from '../utils';

const MAX_CACHE_SIZE = 500;

const isFlase = (state: any): state is boolean => isBoolean(state) ? state === false ? true : false : false;

function setupParent(raw: ISchema) {
    const { parent } = raw;

    if (isVoid(parent)) return "";

    if (isValid(parent) && !isEmpty(parent) && (isNumber(parent) ||
        (isString(parent) && isValid(parent))
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
        : isEmpty(parent) ? keyword : `${parent}.${keyword}`;
}

function setupChildren(target: StructTree, keyword: string | number) {
    return getHasOwnProperty(target, keyword)
        ? target[keyword].children
        : {};
}

class Schema {
    private TempCache: StructTree = {};

    protected schemaUnit: SchemaStruct = [];
    structTree = reactive<StructTree>({});
    changeRecord = ref(Date.now());

    constructor(struct: SchemaStruct) {
        this.initialization(struct);
    }

    protected initialization(struct: SchemaStruct) {
        this.schemaUnit = struct;
    }

    compiler() {
        if (Object.keys(this.TempCache).length >= MAX_CACHE_SIZE) this.TempCache = {};

        each(this.schemaUnit, (raw, index) => {
            const parent = setupParent(raw);

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

            if (isEmpty(parent)) {
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

    static parsers(struct: SchemaStruct) {
        return new Schema(struct);
    }
}

export {
    Schema
}