/*
 * @Author: maggot-code
 * @Date: 2021-11-10 13:58:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-17 01:10:49
 * @Description: file content
 */
import type { Router, RouteLocationNormalized, NavigationGuardNext } from 'vue-router';

import { vuex } from '@/store';
import { PagesEnum } from '@/enums/pages.enum';
import { getToken } from '@/utils/cookie/token';
import { loadBarStart, loadBarFail } from '@/utils/loading-bar';
import { addBadRoute, delBadRoute } from '@/router/router-utils';
import { default as useRouterInstall } from '@/router/router-install';

// 路由前置守卫
const routerBeforeEach = (router: Router) => (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    loadBarStart();

    const { path } = to;
    const hasLogin = path === PagesEnum.BASE_LOGIN;

    if (!getToken()) {
        hasLogin ? next() : next(PagesEnum.BASE_LOGIN);
        return;
    }

    if (hasLogin) {
        next(PagesEnum.BASE_ROOT);
        return;
    }

    if (!vuex.getters['router/hasInstall']) {
        vuex.dispatch('router/setInstall');
        delBadRoute(router);
        useRouterInstall(router, vuex.getters['router/getRouting']);
        addBadRoute(router);
        next({ ...to, replace: true });
        return;
    }

    next();
};

// 路由后置守卫
const routerAfterEach = (to: RouteLocationNormalized) => {
    // console.log('路由后置守卫');
    // console.log(to);
};

// 路由异常守卫
const routerError = (router: Router) => (error: any) => {
    loadBarFail();
    console.log(error, '路由异常!');
    router.push({ path: PagesEnum.ERROR_CRASH });
};

function useRouterGuards(router: Router): Router {
    router.beforeEach(routerBeforeEach(router));
    router.afterEach(routerAfterEach);
    router.onError(routerError(router));

    return router;
};

export default useRouterGuards;