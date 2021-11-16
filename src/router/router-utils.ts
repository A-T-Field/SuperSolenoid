/*
 * @Author: maggot-code
 * @Date: 2021-11-16 23:18:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-16 23:25:53
 * @Description: file content
 */
import type { Router } from 'vue-router';

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
