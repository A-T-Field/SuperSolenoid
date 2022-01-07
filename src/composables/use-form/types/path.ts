/*
 * @Author: maggot-code
 * @Date: 2022-01-06 10:46:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-06 18:11:26
 * @Description: file content
 */
import { Path } from '../model/Path';

export type PathPattern = string;

export interface IParses {
    (source: PathPattern, keyword: string, level?: number): Path;
}