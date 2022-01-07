/*
 * @Author: maggot-code
 * @Date: 2022-01-03 14:02:58
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-07 14:38:22
 * @Description: file content
 */
import type { WatchStopHandle } from 'vue';
import type { StructTree } from '../types/schema';
import type { IFormProps } from '../types/form';
import type { FieldProps, VoidFieldProps } from '../types/field';

import { watchEffect } from 'vue';
import { isEmpty, uid, each } from '../utils';
import { Schema } from './Schema';
import { Graph } from './Graph';
import { Path } from './Path';
import { Field } from './Field';
import { VoidField } from './VoidField';

class Form {
    designID = uid();
    displayName = "Form";

    private schemaWatch: WatchStopHandle;
    protected schema!: Schema;
    protected graph!: Graph;

    constructor(props: IFormProps) {
        this.initialization(props);
        this.schemaWatch = watchEffect(() => {
            this.makeGraphTree(this.schema.structTree);
        });
        this.onInit();
    }

    protected initialization(props: IFormProps) {
        this.schema = props.schema ?? new Schema([]);
        this.graph = new Graph({});
    }

    protected makeGraphTree(structTree: StructTree) {
        each(structTree, (node, keyword) => {
            if (!isEmpty(node.children)) {
                this.makeGraphTree(node.children)
            }

            if (node.hasVoid) {
                this.createVoidField(node);
                return;
            }

            this.createField(node);
        })
    }

    createField = (props: FieldProps): Field => {
        const path = Path.parser(props.address ?? "");

        const sign = path.toString();

        if (this.graph.hasIn(sign)) {
            return this.graph.getIn(sign) as Field;
        }

        const field = new Field({ ...props, address: sign }, path, this);

        return this.graph.setIn(sign, field) as Field;
    }
    createVoidField = (props: VoidFieldProps): VoidField => {
        const path = Path.parser(props.address ?? "");

        const sign = path.toString();

        if (this.graph.hasIn(sign)) {
            return this.graph.getIn(sign) as VoidField;
        }

        const field = new VoidField({ ...props, address: sign }, path, this);

        return this.graph.setIn(sign, field) as VoidField;
    }

    onInit = () => { }
    onMount = () => { }
    onUnmount = () => {
        this.schemaWatch();
    }
}

export {
    Form
}