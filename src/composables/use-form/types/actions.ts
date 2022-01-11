/*
 * @Author: maggot-code
 * @Date: 2022-01-11 09:49:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-11 15:55:28
 * @Description: file content
 */
import type { RequestType } from './share';

export interface IReaction extends Partial<RequestType> {
    async: boolean;
    depend: Array<any>;
    when: any;
};