/*
 * @Author: maggot-code
 * @Date: 2021-12-16 12:59:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-16 17:07:40
 * @Description: file content
 */
import type {
    FormGraph,
    FormProps,
    FormUnrealDOMTree
} from '../types/Form';
import type {
    FieldGather,
    FieldProps,
    FieldVoidProps,
} from '../types/Field';

import { reactive } from 'vue';
import { Field } from './Field';
import { VoidField } from './VoidField';

class FormModel {
    protected _props: FormProps;
    protected _graph: FormGraph = reactive({});

    constructor(props: FormProps) {
        this._props = props;

        this.initialization();
        this.setupDOM(this._props.schema ?? {});
    }

    protected initialization() {
        // console.log(this._props);
    }

    protected setupDOM(schema: FormUnrealDOMTree) {
        for (const key in schema) {
            const { children, model } = schema[key];

            model === "Field"
                && this.createField(schema[key]);

            model === "VoidField"
                && this.createVoidField(schema[key]);

            this.isVoidField(model)
                && children
                && Object.keys(children).length > 0
                && this.setupDOM(children)
        }
    }

    protected isVoidField(modelName?: FieldGather) {
        return modelName === "VoidField";
    }

    createField = (props: Partial<FieldProps>) => {
        const field = new Field(props, this);
        if (this._graph[field.address]) {
            console.log('存在了');
            return;
        }
    }
    createVoidField = (props: Partial<FieldVoidProps>) => {
        const field = new VoidField(props, this);
        if (this._graph[field.address]) {
            console.log('存在了');
            return;
        }
        this._graph[field.address] = field;
    }
}

export {
    FormModel
}