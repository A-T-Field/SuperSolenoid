/*
 * @Author: maggot-code
 * @Date: 2021-10-28 17:14:19
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-10-28 17:24:30
 * @Description: file content
 */
import type { RouteRecordRaw } from 'vue-router';
import { default as UseRouteRecordRaw } from '@/router/router-record';

const HomeRoute = UseRouteRecordRaw({
    name: "home",
    path: "/home",
    meta: {
        title: "首页",
        isMenuRoute: true,
        arctiveMenu: "home",
        hasPower: true,
        hasSort: true
    },
    component: () => import(/* webpackChunkName: "group-home" */ '@/pages/home')
});

const routeModule: Array<RouteRecordRaw> = [
    HomeRoute
];

export default routeModule;