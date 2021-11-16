/*
 * @Author: maggot-code
 * @Date: 2021-11-10 14:20:51
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-17 00:20:47
 * @Description: file content
 */
import type { RouteRecordRaw } from 'vue-router';

import { default as useRouteRecordRaw } from '@/router/router-record';
import { PagesEnum } from '@/enums/pages.enum';

// webpackChunkName = group-base
const RootRoute = useRouteRecordRaw({
    name: PagesEnum.BASE_ROOT_NAME,
    path: PagesEnum.BASE_ROOT,
    redirect: PagesEnum.BASE_READY,
    meta: {
        title: PagesEnum.BASE_ROOT_TITLE,
    },
    component: () => import(/* webpackChunkName: "group-base" */ "@/App.vue"),
});
const ReadyRoute = useRouteRecordRaw({
    name: PagesEnum.BASE_READY_NAME,
    path: PagesEnum.BASE_READY,
    meta: {
        title: PagesEnum.BASE_READY_TITLE,
    },
    component: () => import(/* webpackChunkName: "group-base" */ "@/pages/ready"),
});
const LoginRoute = useRouteRecordRaw({
    name: PagesEnum.BASE_LOGIN_NAME,
    path: PagesEnum.BASE_LOGIN,
    meta: {
        title: PagesEnum.BASE_LOGIN_TITLE
    },
    component: () => import(/* webpackChunkName: "group-base" */ "@/pages/login"),
});
const RegisterRoute = useRouteRecordRaw({
    name: PagesEnum.BASE_REGISTER_NAME,
    path: PagesEnum.BASE_REGISTER,
    meta: {
        title: PagesEnum.BASE_REGISTER_TITLE
    },
    component: () => import(/* webpackChunkName: "group-base" */ "@/pages/register"),
});
const NotPowerRoute = useRouteRecordRaw({
    name: PagesEnum.ERROR_NOT_POWER_NAME,
    path: PagesEnum.ERROR_NOT_POWER,
    meta: {
        title: PagesEnum.ERROR_NOT_POWER_TITLE
    },
    component: () => import(/* webpackChunkName: "group-base" */ "@/pages/not-power"),
});
const NotPageRoute = useRouteRecordRaw({
    name: PagesEnum.ERROR_NOT_PAGE_NAME,
    path: PagesEnum.ERROR_NOT_PAGE,
    meta: {
        title: PagesEnum.ERROR_NOT_PAGE_TITLE
    },
    component: () => import(/* webpackChunkName: "group-base" */ "@/pages/not-page"),
});
const CrashRoute = useRouteRecordRaw({
    name: PagesEnum.ERROR_CRASH_NAME,
    path: PagesEnum.ERROR_CRASH,
    meta: {
        title: PagesEnum.ERROR_CRASH_TITLE
    },
    component: () => import(/* webpackChunkName: "group-base" */ "@/pages/crash"),
});

const routeModule: Array<RouteRecordRaw> = [
    RootRoute,
    ReadyRoute,
    LoginRoute,
    RegisterRoute,
    NotPowerRoute,
    NotPageRoute,
    CrashRoute,
];

export default routeModule;