/*
 * @Author: maggot-code
 * @Date: 2021-11-10 10:32:58
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-12 13:21:34
 * @Description: file content
 */
import type { App } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

import { createRouter, createWebHashHistory } from 'vue-router';

import { default as BaseRouter } from '@/router/static/base.router';

import { default as useRouterGuards } from '$/router/router-guards';

const RouterGroup: Array<RouteRecordRaw> = [...BaseRouter];

const router = createRouter({
    routes: RouterGroup,
    strict: true,
    history: createWebHashHistory(),
    scrollBehavior: () => ({ left: 0, top: 0 })
});

function useVueRouter(app: App<Element>): void {
    app.use(useRouterGuards(router));
};

export {
    RouterGroup,
    router,
}

export default useVueRouter;