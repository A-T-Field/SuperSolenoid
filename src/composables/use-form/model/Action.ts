/*
 * @Author: maggot-code
 * @Date: 2022-01-10 15:26:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-10 15:44:07
 * @Description: file content
 */
import type { GatherFields } from '../types/share';

class Action {
    constructor(actionRaw: any, field: GatherFields) {
        console.log(actionRaw, field);
    }
}

export {
    Action
}