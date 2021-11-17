/*
 * @Author: maggot-code
 * @Date: 2021-11-10 14:05:32
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-17 10:09:18
 * @Description: file content
 */
import type { RouteRecordRaw } from 'vue-router';

import { treeEach } from '@/utils/tree';
import { default as useRouteRecordRaw } from '@/router/router-record';

interface RouterInstall {
    (routing: any): Array<RouteRecordRaw>
}
interface HandlerNode<R> {
    (node: R, parentNode?: R, index?: number, data?: Array<R>): R
}

const setPath = (node: RouteRecordRaw, parentNode?: RouteRecordRaw): string => {
    if (!parentNode || parentNode?.name !== node.meta?.parent) return node.path;

    return parentNode.path + node.path;
}

const setComponent = (node: RouteRecordRaw) => {
    const { meta } = node;

    // return () => import(`../pages/${String(name)}/index.ts`);
    if (meta?.view) {
        return () => import(`../../src/pages/${String(meta?.view)}/index.ts`);
    } else {
        return () => import(`../../src/pages/not-page/index`);
    }
}

const handlerNode: HandlerNode<RouteRecordRaw> = (node, parentNode) => {
    const route = useRouteRecordRaw(Object.assign({}, node, {
        path: setPath(node, parentNode),
        component: setComponent(node)
    }));

    return route;
}

const useRouterInstall: RouterInstall = (routing) => {
    return treeEach<RouteRecordRaw>(handlerNode, routing);
}

export default useRouterInstall;