/*
 * @Author: maggot-code
 * @Date: 2021-11-17 15:35:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-17 18:48:45
 * @Description: file content
 */
import type { RouteRecordRaw } from 'vue-router';

import { treeEach } from '@/utils/tree';

interface HandlerNode<R> {
    (node: R): R
}

interface FilterNode<R> {
    (node: R): boolean
}

const handlerNode: HandlerNode<RouteRecordRaw> = (node) => {
    const { meta } = node;
    return Object.assign({}, node, meta);
}

const filterNode: FilterNode<RouteRecordRaw> = (node) => {
    const { meta } = node;

    const isMenu = meta?.isMenuRoute ?? false;
    const isAsync = meta?.async ?? false;

    return isAsync && isMenu;
}

const useRouterMenu = (routes: Array<RouteRecordRaw>) => {
    return treeEach<RouteRecordRaw>(handlerNode, routes).filter(filterNode);
};

export default useRouterMenu;