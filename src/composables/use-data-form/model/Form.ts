/*
 * @Author: maggot-code
 * @Date: 2021-12-16 17:24:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 11:29:21
 * @Description: file content
 */
import type { FormProps } from '../types/Form';
import type {
    SchemaMember,
    SchemaStruct
} from '../types/Schema';
import type { FieldGather, FieldProps } from '../types/Field';

import { Share } from './Share';
import { Field } from './Field';
import { VoidField } from './VoidField';

class Form extends Share {
    displayName = "Form";

    protected _fieldGather: Record<string, FieldGather> = {};

    constructor(props: FormProps) {
        super(props);
    }

    getFieldGather = (): Record<string, FieldGather> => {
        return this._fieldGather;
    }

    createField = (props: FieldProps): Field => {
        const { address } = props;

        if (this._fieldGather[address]) {
            return this._fieldGather[address];
        }

        const field = new Field(props, this);

        this._fieldGather[field.address] = field;

        return field;
    }

    createVoidField = (props: FieldProps): VoidField => {
        const { address } = props;

        if (this._fieldGather[address]) {
            return this._fieldGather[address];
        }

        const field = new VoidField(props, this);

        this._fieldGather[field.address] = field;

        return field;
    }

    setupSchema = (schemata: SchemaStruct<SchemaMember>) => {
        for (const index in schemata) {
            const schema = schemata[index];
            const { modelType, children } = schema;

            modelType === "Field" && this.createField(schema);
            modelType === "VoidField" && this.createVoidField(schema);

            if (children && Object.keys(children).length > 0) {
                this.setupSchema(children as SchemaStruct<SchemaMember>);
            }
        }
    }
}

export {
    Form
}