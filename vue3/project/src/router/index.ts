/*
 * @Author: maggot-code
 * @Date: 2021-10-14 17:46:24
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-10-28 17:44:15
 * @Description: file content
 */
import type { App } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import {
    createRouter,
    createWebHashHistory
} from 'vue-router';
import { PagesEnum } from '@/enums/pages-enum';
import { default as UseRouteRecordRaw } from '@/router/router-record';
import { default as UseRouterGuards } from '@/router/router-guards';

const RootRoute = UseRouteRecordRaw({
    name: PagesEnum.BASE_ROOT_NAME,
    path: PagesEnum.BASE_ROOT,
    meta: {
        title: PagesEnum.BASE_ROOT_TITLE,
    },
    component: () => import(/* webpackChunkName: "group-base" */ "@/App.vue"),
});
const RedirectRoute = UseRouteRecordRaw({
    name: PagesEnum.REDIRECT_NAME,
    path: PagesEnum.REDIRECT,
    meta: {
        title: PagesEnum.REDIRECT_TITLE
    },
    component: () => import(/* webpackChunkName: "group-base" */ "@/pages/redirect"),
});
const LoginRoute = UseRouteRecordRaw({
    name: PagesEnum.BASE_LOGIN_NAME,
    path: PagesEnum.BASE_LOGIN,
    meta: {
        title: PagesEnum.BASE_LOGIN_TITLE
    },
    component: () => import(/* webpackChunkName: "group-base" */ "@/pages/login"),
});
const RegisterRoute = UseRouteRecordRaw({
    name: PagesEnum.BASE_REGISTER_NAME,
    path: PagesEnum.BASE_REGISTER,
    meta: {
        title: PagesEnum.BASE_REGISTER_TITLE
    },
    component: () => import(/* webpackChunkName: "group-base" */ "@/pages/register"),
});
const NotPowerRoute = UseRouteRecordRaw({
    name: PagesEnum.ERROR_NOT_POWER_NAME,
    path: PagesEnum.ERROR_NOT_POWER,
    meta: {
        title: PagesEnum.ERROR_NOT_POWER_TITLE
    },
    component: () => import(/* webpackChunkName: "group-base" */ "@/pages/not-power"),
});
const NotPageRoute = UseRouteRecordRaw({
    name: PagesEnum.ERROR_NOT_PAGE_NAME,
    path: PagesEnum.ERROR_NOT_PAGE,
    meta: {
        title: PagesEnum.ERROR_NOT_PAGE_TITLE
    },
    component: () => import(/* webpackChunkName: "group-base" */ "@/pages/not-page"),
});
const CrashRoute = UseRouteRecordRaw({
    name: PagesEnum.ERROR_CRASH_NAME,
    path: PagesEnum.ERROR_CRASH,
    meta: {
        title: PagesEnum.ERROR_CRASH_TITLE
    },
    component: () => import(/* webpackChunkName: "group-base" */ "@/pages/crash"),
});
const BadPageRoute = UseRouteRecordRaw({
    name: PagesEnum.ERROR_UNUSUAL_NAME,
    path: PagesEnum.ERROR_UNUSUAL,
    redirect: PagesEnum.ERROR_NOT_PAGE,
    meta: {
        title: PagesEnum.ERROR_UNUSUAL_TITLE
    }
});

const constantRouter: Array<RouteRecordRaw> = [
    RootRoute,
    RedirectRoute,
    LoginRoute,
    RegisterRoute,
    NotPowerRoute,
    NotPageRoute,
    CrashRoute,
    BadPageRoute
];

const router = createRouter({
    strict: true,
    routes: constantRouter,
    history: createWebHashHistory(),
    scrollBehavior: () => ({ left: 0, top: 0 }),
});

function UseVueRouter(app: App<Element>): void {
    app.use(UseRouterGuards(router))
}

export {
    router,
    constantRouter
};

export default UseVueRouter;