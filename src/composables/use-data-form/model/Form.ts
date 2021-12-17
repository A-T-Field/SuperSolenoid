/*
 * @Author: maggot-code
 * @Date: 2021-12-16 17:24:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 11:33:53
 * @Description: file content
 */
import type { FormProps, FormFieldsGather } from '../types/Form';
import type {
    SchemaMember,
    SchemaStruct
} from '../types/Schema';
import type { FieldProps } from '../types/Field';

import { Share } from './Share';
import { Field } from './Field';
import { VoidField } from './VoidField';

class Form extends Share {
    displayName = "Form";

    protected _fieldsGather: FormFieldsGather = {};

    constructor(props: FormProps) {
        super(props);
    }

    getFieldGather = (): FormFieldsGather => {
        return this._fieldsGather;
    }

    createField = (props: FieldProps): Field => {
        const { address } = props;

        if (this._fieldsGather[address]) {
            return this._fieldsGather[address];
        }

        const field = new Field(props, this);

        this._fieldsGather[field.address] = field;

        return field;
    }

    createVoidField = (props: FieldProps): VoidField => {
        const { address } = props;

        if (this._fieldsGather[address]) {
            return this._fieldsGather[address];
        }

        const field = new VoidField(props, this);

        this._fieldsGather[field.address] = field;

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