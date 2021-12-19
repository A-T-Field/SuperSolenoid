/*
 * @Author: maggot-code
 * @Date: 2021-12-16 17:32:44
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-19 15:24:15
 * @Description: file content
 */
import type { GraphDOMtree } from '../types/Graph';

import { Form } from './Form';

class Graph {
    displayName = "Graph";

    protected _form!: Form;

    constructor(form: Form) {
        this._form = form;
    }

    getGraph = (baseLevel: number) => {
        const data: GraphDOMtree = {}

        for (const address in this._form.fieldsGather) {
            const field = this._form.fieldsGather[address];
            const { displayName, key, level } = field;

            if (level !== baseLevel) continue;

            data[key] = {
                model: field
            };

            if (displayName === "VoidField") {
                data[key].children = this.getGraph(level + 1);
            }
        }

        return data;
    }
}

export {
    Graph
}