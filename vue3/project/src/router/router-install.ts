/*
 * @Author: maggot-code
 * @Date: 2021-11-03 14:54:16
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-04 17:14:19
 * @Description: file content
 */
import type { Router, RouteRecordRaw } from 'vue-router';

import { default as UseRouteRecordRaw } from '@/router/router-record';
import { treeEach } from '@/utils/tree';

interface RouterInstall {
    (router: Router, routing: any): Router
}
interface HandlerNode<R> {
    (node: R, parentNode?: R, index?: number, data?: Array<R>): R
}

const setPath = (node: RouteRecordRaw, parentNode?: RouteRecordRaw): string => {
    if (!parentNode || parentNode?.name !== node.meta?.parent) return node.path;


    return parentNode.path + node.path;
}

const setComponent = (node: RouteRecordRaw) => {
    const { name } = node;

    return () => import(`../pages/${String(name)}/index.ts`);
}

const handlerNode: HandlerNode<RouteRecordRaw> = (node, parentNode) => {
    const route = UseRouteRecordRaw(Object.assign({}, node, {
        path: setPath(node, parentNode),
        component: setComponent(node)
    }));

    return route;
}

const UseRouterInstall: RouterInstall = (router, routing) => {
    treeEach<RouteRecordRaw>(handlerNode, routing).map(route => router.addRoute(route));

    return router;
}

export default UseRouterInstall;