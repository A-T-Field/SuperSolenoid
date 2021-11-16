/*
 * @Author: maggot-code
 * @Date: 2021-11-10 14:05:32
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-16 17:17:18
 * @Description: file content
 */
import type { RouteRecordRaw } from 'vue-router';

import { default as useRouteRecordRaw } from '@/router/router-record';
import { treeEach } from '@/utils/tree';

interface RouterInstall {
    (routing: any): Array<RouteRecordRaw>
}
interface HandlerNode<R> {
    (node: R, parentNode?: R, index?: number, data?: Array<R>): R
}

const BadPageRoute = useRouteRecordRaw({
    name: 'unusual',
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    meta: {
        title: '异常地址'
    }
});

const setPath = (node: RouteRecordRaw, parentNode?: RouteRecordRaw): string => {
    if (!parentNode || parentNode?.name !== node.meta?.parent) return node.path;

    return parentNode.path + node.path;
}

const setComponent = (node: RouteRecordRaw) => {
    const { name } = node;

    // return () => import(`../pages/${String(name)}/index.ts`);
    return () => import(`../../src/pages/${String(name)}/index.ts`);
}

const handlerNode: HandlerNode<RouteRecordRaw> = (node, parentNode) => {
    const route = useRouteRecordRaw(Object.assign({}, node, {
        path: setPath(node, parentNode),
        component: setComponent(node)
    }));

    return route;
}

const useRouterInstall: RouterInstall = (routing) => {
    const route = treeEach<RouteRecordRaw>(handlerNode, routing);

    route.push(BadPageRoute);

    return route;
}

export default useRouterInstall;