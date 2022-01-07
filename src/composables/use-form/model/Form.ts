/*
 * @Author: maggot-code
 * @Date: 2022-01-03 14:02:58
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-07 09:25:35
 * @Description: file content
 */
import type { StructTree } from '../types/schema';
import type { IFormProps } from '../types/form';
import type { FieldProps, VoidFieldProps } from '../types/field';

import { unref, reactive, computed, watchEffect, WatchStopHandle } from 'vue';
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

    createField = (props: FieldProps) => {
        const field = new Field(props);

        this.graph.setup(field);

        return field;
    }
    createVoidField = (props: VoidFieldProps) => {
        const field = new VoidField(props);

        this.graph.setup(field);

        return field;
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