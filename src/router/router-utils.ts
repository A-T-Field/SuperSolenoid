/*
 * @Author: maggot-code
 * @Date: 2021-11-16 23:18:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-22 10:10:36
 * @Description: file content
 */
import type { Router, RouteRecordName, RouteRecordRaw } from 'vue-router';

import { PagesEnum } from '@/enums/pages.enum';
import { default as BadRouter } from '@/router/static/bad.router';

export function hasBadRoute(router: Router): boolean {
    return router.hasRoute(PagesEnum.ERROR_UNUSUAL_NAME);
}

export function delBadRoute(router: Router): void {
    hasBadRoute(router) && router.removeRoute(PagesEnum.ERROR_UNUSUAL_NAME);
}

export function addBadRoute(router: Router): void {
    if (!hasBadRoute(router)) {
        BadRouter.forEach(route => router.addRoute(route));
    }
}

export function handlerRoutes(routes: Array<RouteRecordRaw>, parent: RouteRecordName): Array<RouteRecordRaw> {
    const data: Array<RouteRecordRaw> = [];

    routes.forEach(route => {
        const { name, meta, children } = route;

        if (meta?.async && meta.isMenuRoute && meta?.parent === parent) {
            const nextNode = handlerRoutes(children ?? [], name ?? "");

            if (nextNode.length > 0) route['nextNode'] = nextNode;

            data.push(Object.assign({}, route, meta));
        }
    })

    return data;
}

export function filterRoutes(router: Router): Array<RouteRecordRaw> {
    const routes = router.getRoutes();

    return handlerRoutes(routes, '');
}