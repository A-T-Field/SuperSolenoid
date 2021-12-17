/*
 * @Author: maggot-code
 * @Date: 2021-12-16 17:32:44
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 11:34:28
 * @Description: file content
 */
import type { FormFieldsGather } from '../types/Form';

class Graph {
    displayName = "Graph";

    constructor(fields: FormFieldsGather) {
        console.log(fields);
    }
}

export {
    Graph
}