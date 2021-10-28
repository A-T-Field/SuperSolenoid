/*
 * @Author: maggot-code
 * @Date: 2021-10-28 13:24:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-10-28 14:36:28
 * @Description: file content
 */
import type { Router, RouteLocationNormalized, NavigationGuardNext } from 'vue-router';

// 路由前置守卫
const routerBeforeEach = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    console.log('路由前置守卫');
    console.log(to, from);
    next();
}

// 路由后置守卫
const routerAfterEach = (to: RouteLocationNormalized) => {
    console.log('路由后置守卫');
    console.log(to);
}

// 路由异常守卫
const routerError = (error: any) => {
    console.log(error, '路由异常!');
}

const UseRouterGuards = (router: Router): Router => {
    router.beforeEach(routerBeforeEach);
    router.afterEach(routerAfterEach);
    router.onError(routerError);

    return router;
};

export default UseRouterGuards;