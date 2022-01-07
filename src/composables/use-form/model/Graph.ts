/*
 * @Author: maggot-code
 * @Date: 2022-01-06 17:40:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-07 14:36:10
 * @Description: file content
 */
import type { GatherFields } from '../types/share';
import type { FieldTree, IGraphProps } from '../types/graph';

import { reactive } from 'vue';
import { isValid } from '../utils';

class Graph {
    protected fieldTree = reactive<FieldTree>({});

    constructor(props: IGraphProps) { }

    hasIn = (sign: string): boolean => {
        return isValid(this.fieldTree[sign]);
    }
    getIn = (sign: string): GatherFields => {
        return this.fieldTree[sign] as GatherFields;
    }
    setIn = (sign: string, field: GatherFields): GatherFields => {
        this.fieldTree[sign] = field;

        return field;
    }
}

export {
    Graph
}