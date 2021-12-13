/*
 * @Author: maggot-code
 * @Date: 2021-12-13 23:48:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-14 00:33:35
 * @Description: file content
 */
import type { SchemaOptions } from '../types/Schema';

import { uid } from '@/utils/uid';

class Schema {
    protected _schemaUnit: SchemaOptions = {};
    protected _schemaIterator: SchemaOptions = {};

    constructor(schema: SchemaOptions) {
        this.initialization(schema);
        this.setupIterator();
    }

    protected initialization(schema: SchemaOptions) {
        this._schemaUnit = schema;
    }
    protected setupIterator() {
        const iterator = Object.keys(this._schemaUnit)[Symbol.iterator]();
        console.log(iterator);
    }
}

export {
    Schema
}