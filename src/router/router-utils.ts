/*
 * @Author: maggot-code
 * @Date: 2021-11-16 23:18:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-18 15:33:11
 * @Description: file content
 */
import type { Router, RouteRecordRaw } from 'vue-router';

import { PagesEnum } from '@/enums/pages.enum';
import { isArray } from '@/utils/is';
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

const handlerRoutesExtend = (cb: Fn) => (route: RouteRecordRaw): RouteRecordRaw => {
    const { meta, children } = route;

    const child = isArray(children) && children.length > 0 ? cb(children) : [];

    const extend = Object.assign({}, meta, {});

    if (child.length > 0) {
        extend.child = child;
    }

    return Object.assign({}, route, extend);
}
export function filterRoutesNav(routes: Array<RouteRecordRaw>): Array<RouteRecordRaw> {
    return routes
        .filter((route) => {
            const { meta } = route;
            return meta?.async && meta.isNavRoute;
        })
        .map(handlerRoutesExtend(filterRoutesNav));
}

export function filterRoutesMenu(routes: Array<RouteRecordRaw>): Array<RouteRecordRaw> {
    return routes
        .filter((route) => {
            const { meta } = route;
            return meta?.async && meta.isMenuRoute
        })
        .map(handlerRoutesExtend(filterRoutesMenu));
}
