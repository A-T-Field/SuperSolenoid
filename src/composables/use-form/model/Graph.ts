/*
 * @Author: maggot-code
 * @Date: 2022-01-06 17:40:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-06 18:08:29
 * @Description: file content
 */
import type { GatherFields } from '../types/share';
import type { FieldTree, IGraphProps } from '../types/graph';

import { reactive } from 'vue';

class Graph {
    protected fieldTree = reactive<FieldTree>({});

    constructor(props: IGraphProps) {
        console.log(props);
    }

    setup(field: GatherFields) {
        console.log(field);
    }
}

export {
    Graph
}