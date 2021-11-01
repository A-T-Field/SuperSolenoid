/*
 * @Author: maggot-code
 * @Date: 2021-10-29 15:16:10
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-10-29 15:27:21
 * @Description: file content
 */
import type { RouteRecordRaw } from 'vue-router';

function UseRouterGroup(routerGroup: Array<RouteRecordRaw>): RouteRecordRaw[] {
    console.log(routerGroup);

    return routerGroup;
}

export default UseRouterGroup;