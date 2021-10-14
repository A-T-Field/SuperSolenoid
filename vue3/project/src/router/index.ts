/*
 * @Author: maggot-code
 * @Date: 2021-10-14 17:46:24
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-10-14 17:49:19
 * @Description: file content
 */
import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw
} from 'vue-router';

const routes: Array<RouteRecordRaw> = [];

const UseVueRouter = createRouter({
    history: createWebHashHistory(),
    routes
});

export default UseVueRouter;