/*
 * @Author: maggot-code
 * @Date: 2021-10-29 15:40:40
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-10-29 15:46:16
 * @Description: file content
 */
import type { RouteRecordRaw } from 'vue-router';
import { default as UseRouteRecordRaw } from '@/router/router-record';
import { PagesEnum } from '@/enums/pages-enum';

// webpackChunkName = group-base
const RootRoute = UseRouteRecordRaw({
    name: PagesEnum.BASE_ROOT_NAME,
    path: PagesEnum.BASE_ROOT,
    redirect: PagesEnum.BASE_READY,
    meta: {
        title: PagesEnum.BASE_ROOT_TITLE,
    },
    component: () => import(/* webpackChunkName: "group-base" */ "@/App.vue"),
});
const ReadyRoute = UseRouteRecordRaw({
    name: PagesEnum.BASE_READY_NAME,
    path: PagesEnum.BASE_READY,
    meta: {
        title: PagesEnum.BASE_READY_TITLE
    },
    component: () => import(/* webpackChunkName: "group-base" */ "@/pages/ready")
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

const routeModule: Array<RouteRecordRaw> = [
    RootRoute,
    ReadyRoute,
    RedirectRoute,
    LoginRoute,
    RegisterRoute,
    NotPowerRoute,
    NotPageRoute,
    CrashRoute,
    BadPageRoute
];

export default routeModule;