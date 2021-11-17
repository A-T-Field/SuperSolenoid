/*
 * @Author: maggot-code
 * @Date: 2021-11-17 18:40:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-17 18:40:35
 * @Description: file content
 */
import type { RouteRecordRaw } from 'vue-router';

import { isArray } from '@/utils/is';
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
    const { meta, children } = node;

    const isMenu = meta?.isNavRoute ?? false;
    const isAsync = meta?.async ?? false;

    return isAsync && isMenu && isArray(children) && children.length > 0;
}

const useRouterNav = (routes: Array<RouteRecordRaw>) => {
    return treeEach<RouteRecordRaw>(handlerNode, routes).filter(filterNode);
};

export default useRouterNav;