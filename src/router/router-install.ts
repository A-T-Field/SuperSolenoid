/*
 * @Author: maggot-code
 * @Date: 2021-11-10 14:05:32
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-19 15:10:25
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

const setComponent = (node: RouteRecordRaw) => {
    const { meta } = node;

    const component = meta?.view
        ? () => import(/* webpackChunkName: "group-async" */ `../../src/pages/${String(meta?.view)}/index.ts`)
        : () => import(/* webpackChunkName: "group-base" */ `../../src/pages/not-page/index`);

    return component;
}

const handlerNode: HandlerNode<RouteRecordRaw> = (node, parentNode) => {
    const route = useRouteRecordRaw(Object.assign({}, node, {
        component: setComponent(node)
    }));

    return route;
}

const useRouterInstall: RouterInstall = (routing) => {
    return treeEach<RouteRecordRaw>(handlerNode, routing);
}

export default useRouterInstall;