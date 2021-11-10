/*
 * @Author: maggot-code
 * @Date: 2021-11-01 16:02:54
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-01 16:17:12
 * @Description: file content
 */
import { unref } from 'vue';
import { PagesEnum } from '@/enums/pages-enum';

import type {
    RouteLocationNormalizedLoaded,
    Router
} from 'vue-router';

export function UsePageReload(router: Router, route: RouteLocationNormalizedLoaded): void {
    const { fullPath: path, query } = unref(route);

    router.push({
        name: PagesEnum.REDIRECT_NAME,
        params: { path },
        query
    });
};

export default () => { }