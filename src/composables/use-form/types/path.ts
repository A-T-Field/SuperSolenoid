/*
 * @Author: maggot-code
 * @Date: 2022-01-06 10:46:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-07 14:40:43
 * @Description: file content
 */
import type { FieldGraph } from './graph';

import { Path } from '../model/Path';

export type PathPattern = string;

export interface IParser<T = Path<FieldGraph>> {
    (source: PathPattern): T;
};

export interface ISeeks {
    (target: any, section: Array<string | number>, length: number): { really: boolean, value: any }
}

export interface IPathProps {
    source: PathPattern;
    section: Array<string>;
};