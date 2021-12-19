/*
 * @Author: maggot-code
 * @Date: 2021-12-17 12:31:51
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-19 15:21:22
 * @Description: file content
 */
import type { ModelType, FieldGather } from '../types/Field';

export type GraphDOMnode = {
    model: FieldGather;
    children?: GraphDOMtree;
};

export type GraphDOMtree = Record<string, GraphDOMnode>;