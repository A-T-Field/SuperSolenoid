/*
 * @Author: maggot-code
 * @Date: 2021-11-10 16:07:10
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-10 16:41:53
 * @Description: file content
 */
import type { Router, RouteLocationNormalizedLoaded } from 'vue-router';

import { defineComponent, onBeforeMount, unref } from 'vue';
import { loadBarEnd } from '$/utils/loading-bar';
import { isArray } from '$/utils/is';

import { default as UseRouteRecordRaw } from '$/router/router-record';

interface Redirect {
    (router: Router, route: RouteLocationNormalizedLoaded)
}

const BASE_REDIRECT = 'redirect';

const createRedirect: Redirect = (router, route) => {
    const component = defineComponent({
        name: BASE_REDIRECT,
        render: () => { },
        setup() {
            onBeforeMount(() => {
                loadBarEnd();

                const { params, query } = unref(route);
                const { path: basepath } = params;
                const path = isArray(basepath) ? basepath.join('/') : basepath;

                router.push({ path, query });
            })
        }
    });

    return router.addRoute(UseRouteRecordRaw({
        name: BASE_REDIRECT,
        path: `/${BASE_REDIRECT}`,
        meta: {},
        component
    }));
}

const UseReloadPage: Redirect = (router, route) => {
    const { fullPath: path, query } = unref(route);

    const redirectRoute = createRedirect(router, route);

    return router.push({
        name: BASE_REDIRECT,
        params: { path },
        query
    }).then(redirectRoute);
}

export default UseReloadPage;