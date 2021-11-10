/*
 * @Author: maggot-code
 * @Date: 2021-11-10 13:58:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-10 14:00:10
 * @Description: file content
 */
import type { Router, RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import { loadBarStart, loadBarFail } from '$/utils/loading-bar';

// 路由前置守卫
const routerBeforeEach = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    loadBarStart();
    // console.log('路由前置守卫');
    // console.log(to, from);
    next();
};

// 路由后置守卫
const routerAfterEach = (to: RouteLocationNormalized) => {
    // console.log('路由后置守卫');
    // console.log(to);
};

// 路由异常守卫
const routerError = (error: any) => {
    loadBarFail();
    console.log(error, '路由异常!');
};

function UseRouterGuards(router: Router): Router {
    router.beforeEach(routerBeforeEach);
    router.afterEach(routerAfterEach);
    router.onError(routerError);

    return router;
};

export default UseRouterGuards;