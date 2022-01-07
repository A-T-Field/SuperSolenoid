/*
 * @Author: maggot-code
 * @Date: 2022-01-06 17:40:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-07 14:40:02
 * @Description: file content
 */
import type { GatherFields } from '../types/share';
import type { FieldGraph, IGraphProps } from '../types/graph';

import { reactive } from 'vue';
import { isValid } from '../utils';

class Graph {
    protected fieldGraph = reactive<FieldGraph>({});

    constructor(props: IGraphProps) { }

    hasIn = (sign: string): boolean => {
        return isValid(this.fieldGraph[sign]);
    }
    getIn = (sign: string): GatherFields => {
        return this.fieldGraph[sign] as GatherFields;
    }
    setIn = (sign: string, field: GatherFields): GatherFields => {
        this.fieldGraph[sign] = field;

        return field;
    }
}

export {
    Graph
}