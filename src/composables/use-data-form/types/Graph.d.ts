/*
 * @Author: maggot-code
 * @Date: 2021-12-17 12:31:51
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 16:54:47
 * @Description: file content
 */
import type { ModelType, FieldGather } from '../types/Field';

export type GraphDOMnode = {
    sort: number;
    name: ModelType,
    isStrict: boolean;
    model: FieldGather;
    children?: GraphDOMtree;
};

export type GraphDOMtree = Record<string, GraphDOMnode>;