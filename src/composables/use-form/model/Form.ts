/*
 * @Author: maggot-code
 * @Date: 2022-01-03 14:02:58
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-10 15:22:50
 * @Description: file content
 */
import type { WatchStopHandle } from 'vue';
import type { StructTree } from '../types/schema';
import type { IFormProps } from '../types/form';
import type { FieldProps, VoidFieldProps } from '../types/field';

import { unref, computed, watchEffect } from 'vue';
import { isEmpty, uid, each } from '../utils';
import { Share } from './Share';
import { Schema } from './Schema';
import { Graph } from './Graph';
import { Data } from './Data';
import { Path } from './Path';
import { Field } from './Field';
import { VoidField } from './VoidField';

class Form extends Share {
    designID = uid();
    displayName = "Form";

    private schemaWatch: WatchStopHandle;
    protected schema!: Schema;
    protected graph!: Graph;
    protected data!: Data;

    constructor(props: IFormProps) {
        super();

        this.initialization(props);
        this.schemaWatch = watchEffect(() => {
            this.makeGraph(this.context.body);
        });
        this.onInit();
    }

    get graphMap() {
        return this.graph.maps;
    }
    get context() {
        return unref(computed(() => {
            return {
                record: unref(this.schema.changeRecord),
                body: this.schema.structTree
            }
        }));
    }
    get values() {
        return unref(computed(() => unref(this.data.dataValues)))
    }
    get defaultValues() {
        return unref(computed(() => unref(this.data.dataDefaultValues)))
    }

    protected initialization(props: IFormProps) {
        this.schema = props.schema ?? new Schema([]);
        this.graph = new Graph(this);
        this.data = new Data(this);
    }

    protected makeGraph(structTree: StructTree) {
        each(structTree, (node, keyword) => {
            if (!isEmpty(node.children)) {
                this.makeGraph(node.children)
            }

            if (node.hasVoid) {
                this.createVoidField(node);
                return;
            }

            this.createField(node);
        });
    }

    private parserPath(address?: string) {
        const path = Path.parser(address ?? "");

        return {
            path,
            sign: path.toString()
        }
    }

    createField = (props: FieldProps): Field => {
        const { path, sign } = this.parserPath(props.address);

        if (this.graph.hasIn(sign)) {
            return this.graph.getIn(sign) as Field;
        }

        const field = new Field(props, path, this);

        return this.graph.setIn(sign, field) as Field;
    }

    createVoidField = (props: VoidFieldProps): VoidField => {
        const { path, sign } = this.parserPath(props.address);

        if (this.graph.hasIn(sign)) {
            return this.graph.getIn(sign) as VoidField;
        }

        const field = new VoidField(props, path, this);

        return this.graph.setIn(sign, field) as VoidField;
    }

    hasFieldIn(address: string) {
        return this.graph.hasIn(address);
    }
    getFieldIn(address: string) {
        return this.graph.getIn(address);
    }

    setValueIn(valuePath: string | number, val: any) {
        this.data.setDataValue(valuePath, val);
    }
    setDefaultValueIn(valuePath: string | number, val: any) {
        this.data.setDataDefaultValue(valuePath, val);
    }

    onInit = () => {
        this.selfInitialized.value = true;
    }
    onMount = () => {
        this.selfMounted.value = true;
    }
    onUnmount = () => {
        this.schemaWatch();
        this.graph.destroy();
        this.data.destroy();

        this.selfUnmounted.value = true;
    }
}

export {
    Form
}