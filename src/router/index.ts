/*
 * @Author: maggot-code
 * @Date: 2021-10-14 17:46:24
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-03 16:28:36
 * @Description: file content
 */
import type { App } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

import {
    createRouter,
    createWebHashHistory
} from 'vue-router';

import { default as BaseRouter } from '@/router/static/base.router';

import { default as UseRouterInstall } from '@/router/router-install';
import { default as UseRouterGuards } from '@/router/router-guards';

import MockRoute from '@/assets/json/power-route-test.json';
const MockData = JSON.parse(JSON.stringify(MockRoute));

const constantRouter: Array<RouteRecordRaw> = [
    ...BaseRouter
];

const router = createRouter({
    strict: true,
    routes: constantRouter,
    history: createWebHashHistory(),
    scrollBehavior: () => ({ left: 0, top: 0 }),
});

function UseVueRouter(app: App<Element>): void {
    app.use(UseRouterGuards(UseRouterInstall(router, MockData)))
};

export {
    router,
    constantRouter
};

export default UseVueRouter;