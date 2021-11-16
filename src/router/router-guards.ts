/*
 * @Author: maggot-code
 * @Date: 2021-11-10 13:58:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-16 17:17:09
 * @Description: file content
 */
import type { Router, RouteLocationNormalized, NavigationGuardNext } from 'vue-router';

import { loadBarStart, loadBarFail } from '@/utils/loading-bar';

// 路由前置守卫
const routerBeforeEach = (router: Router) => (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    loadBarStart();


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

function useRouterGuards(router: Router): Router {
    router.beforeEach(routerBeforeEach(router));
    router.afterEach(routerAfterEach);
    router.onError((error) => {
        routerError(error);
    });

    return router;
};

export default useRouterGuards;