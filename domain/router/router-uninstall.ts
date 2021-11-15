/*
 * @Author: maggot-code
 * @Date: 2021-11-15 18:04:54
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-15 18:36:39
 * @Description: file content
 */
import type { Router, RouteRecordRaw } from 'vue-router';

import { treeEach } from '$/utils/tree';
import { isNil } from '$/utils/is';

interface HandlerNode<R> {
    (node: R, parentNode?: R, index?: number, data?: Array<R>): R
}

const handlerNode: HandlerNode<RouteRecordRaw> = (route) => route;

const useRouterUninstall = (router: Router) => {
    treeEach<RouteRecordRaw>(handlerNode, router.getRoutes()).map(route => {
        const { name, meta } = route;

        if (isNil(name) || isNil(meta)) return false;

        const { asyn } = meta;

        asyn && router.hasRoute(name) && router.removeRoute(name);
    });

    return router;
}

export default useRouterUninstall;