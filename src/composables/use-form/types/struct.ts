/*
 * @Author: maggot-code
 * @Date: 2022-01-06 10:44:31
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-06 10:44:31
 * @Description: file content
 */
import type { ISchema } from './schema';

export interface IStructNode extends ISchema {
    path: string;
    children: StructTree;
};

export type StructTree = Record<string, IStructNode>;