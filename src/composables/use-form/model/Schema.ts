/*
 * @Author: maggot-code
 * @Date: 2021-12-13 23:48:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-14 12:49:44
 * @Description: file content
 */
import type {
    SchemaOptions
} from '../types/Schema';

import { unref, reactive } from 'vue';
import { useIterator } from '../hooks/useIterator';

class Schema {
    protected _schemaUnit: SchemaOptions = reactive({});

    constructor(schema: SchemaOptions) {
        this.initialization(schema);
    }

    protected initialization(schema: SchemaOptions) {
        this._schemaUnit = schema;
    }

    get schemaUnit() {
        return unref(this._schemaUnit);
    }
    get schemaIterator() {
        return useIterator(this.schemaUnit);
    }
    set schemaUnit(schema: SchemaOptions) {
        this._schemaUnit = schema;
    }
}

export {
    Schema
}