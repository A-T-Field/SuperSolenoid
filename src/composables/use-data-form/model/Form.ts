/*
 * @Author: maggot-code
 * @Date: 2021-12-16 17:24:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-20 15:50:23
 * @Description: file content
 */
import type { FormBaseProps, FormProps, FormFieldsGather } from '../types/Form';
import type {
    SchemaMember,
    SchemaStruct
} from '../types/Schema';
import type { FieldProps } from '../types/Field';

import { Share } from './Share';
import { Field } from './Field';
import { VoidField } from './VoidField';
import { Graph } from './Graph';

class Form extends Share {
    displayName = "Form";

    protected _graph!: Graph;
    protected _fieldsGather: FormFieldsGather = {};
    protected _baseProps: Partial<FormBaseProps> = {};

    constructor(props: FormProps) {
        super(props);
        this._graph = new Graph(this);
        this.setupBaseProps(props.baseProps)
    }

    protected setupBaseProps(baseProps?: Partial<FormBaseProps>) {
        const defaultProps: FormBaseProps = {
            inline: false,
            labelWidth: 90,
            labelAlign: "right",
            labelPlacement: "left",
            requireMarkPlacement: "left",
            size: "large"
        };

        this._baseProps = Object.assign({}, defaultProps, baseProps);
    }

    get fieldsGather() {
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

    // 应用方法
    getFormProps = () => {
        return this._baseProps;
    }
    getFieldGraph = () => {
        return this._graph.getGraph(0);
    }
    getField = (address: string) => {
        return this._fieldsGather[address];
    }
}

export {
    Form
}