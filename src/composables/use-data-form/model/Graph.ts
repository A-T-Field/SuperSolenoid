/*
 * @Author: maggot-code
 * @Date: 2021-12-16 17:32:44
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 16:55:33
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

    getGraph = (baseL: number) => {
        const data: GraphDOMtree = {}

        for (const address in this._form.fieldsGather) {
            const field = this._form.fieldsGather[address];
            const { displayName, key, level, sort, vessel } = field;

            if (level !== baseL) continue;

            data[key] = {
                sort,
                name: displayName,
                isStrict: vessel === "Grid",
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