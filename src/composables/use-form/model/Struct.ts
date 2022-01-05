/*
 * @Author: maggot-code
 * @Date: 2022-01-03 14:03:42
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-05 10:32:19
 * @Description: file content
 */
import type { GatherFields, IStructNode, StructNodeTree } from './types';

class Struct {
    nodeTree: StructNodeTree = {};

    hasIn = (field: GatherFields) => {
        return field.address.has(this.nodeTree);
    }

    getIn = (field: GatherFields) => {
        return field.address.at(this.nodeTree);
    }

    setIn = (field: GatherFields) => {
        field.address.do<IStructNode>(this.nodeTree, {
            field,
            record: 0,
            children: {}
        });
    }
}

export {
    Struct
}