/*
 * @Author: maggot-code
 * @Date: 2021-11-16 23:18:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-21 22:31:28
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

const handlerNavRoutes = (routes: Array<RouteRecordRaw>, parent: RouteRecordName): Array<RouteRecordRaw> => {
    const data: Array<RouteRecordRaw> = [];

    routes.forEach(route => {
        const { name, meta, children } = route;

        if (meta?.async && meta.isNavRoute && meta?.parent === parent) {
            const nextNode = handlerNavRoutes(children ?? [], name ?? "");

            if (nextNode.length > 0) route['nextNode'] = nextNode;

            data.push(Object.assign({}, route, meta));
        }
    })

    return data;
}
export function filterNavRoutes(router: Router): Array<RouteRecordRaw> {
    const routes = router.getRoutes();

    return handlerNavRoutes(routes, '');
}

export function filterMenuRoutes(routes: Array<RouteRecordRaw>) {
    const data: Array<RouteRecordRaw> = [];

    routes.forEach(route => {
        const { meta, children } = route;

        if (meta?.async && meta.isMenuRoute) {
            const nextNode = filterMenuRoutes(children ?? []);

            if (nextNode.length > 0) route['nextNode'] = nextNode;

            data.push(Object.assign({}, route, meta));
        }
    });

    return data;
}