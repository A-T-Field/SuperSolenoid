/*
 * @Author: maggot-code
 * @Date: 2021-10-14 17:46:24
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-10-22 15:01:10
 * @Description: file content
 */
import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw
} from 'vue-router';

import StaticRouters from '@/assets/json/static-routers.json';
// import { default as useRouterRender } from './render';

console.log(StaticRouters);

const routes: Array<RouteRecordRaw> = [];

const UseVueRouter = createRouter({
    history: createWebHashHistory(),
    routes
});

export default UseVueRouter;