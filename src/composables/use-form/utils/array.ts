/*
 * @Author: maggot-code
 * @Date: 2021-12-31 14:51:54
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-31 14:51:55
 * @Description: file content
 */
import { isArray } from './checkers';
import { isValid } from './isEmpty';

export const toArray = (val: any): Array<any> => isArray(val) ? val : isValid(val) ? [val] : val;