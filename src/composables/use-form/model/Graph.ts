/*
 * @Author: maggot-code
 * @Date: 2022-01-06 17:40:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-10 15:22:01
 * @Description: file content
 */
import type { GatherFields } from '../types/share';
import type { FieldGraph } from '../types/graph';

import { unref, reactive, computed } from 'vue';
import { isValid } from '../utils';
import { Form } from './Form';

class Graph {
    protected form: Form;
    protected fieldGraph: FieldGraph = reactive({});

    constructor(form: Form) {
        this.form = form;
    }

    get maps() {
        return unref(computed(() => {
            return this.fieldGraph;
        }))
    }

    hasIn(sign: string): boolean {
        return isValid(this.fieldGraph[sign]);
    }
    getIn(sign: string): GatherFields {
        return this.fieldGraph[sign] as GatherFields;
    }
    setIn(sign: string, field: GatherFields): GatherFields {
        this.fieldGraph[sign] = field;
        return this.fieldGraph[sign];
    }

    destroy() {
        this.fieldGraph = {};
    }
}

export {
    Graph
}