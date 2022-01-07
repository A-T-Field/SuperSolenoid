/*
 * @Author: maggot-code
 * @Date: 2022-01-06 17:40:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-07 15:01:31
 * @Description: file content
 */
import type { GatherFields } from '../types/share';
import type { FieldGraph } from '../types/graph';

import { isValid } from '../utils';
import { Form } from './Form';

class Graph {
    protected form: Form;
    protected fieldGraph: FieldGraph = {};

    constructor(form: Form) {
        this.form = form;
    }

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