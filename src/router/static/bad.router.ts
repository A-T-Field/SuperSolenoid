/*
 * @Author: maggot-code
 * @Date: 2021-11-16 17:24:25
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-17 15:43:40
 * @Description: file content
 */
import type { RouteRecordRaw } from 'vue-router';

import { default as useRouteRecordRaw } from '@/router/router-record';
import { PagesEnum } from '@/enums/pages.enum';

const BadPageRoute = useRouteRecordRaw({
    name: PagesEnum.ERROR_UNUSUAL_NAME,
    path: PagesEnum.ERROR_UNUSUAL,
    redirect: PagesEnum.ERROR_NOT_PAGE,
    meta: {
        async: false,
        title: PagesEnum.ERROR_UNUSUAL_TITLE,
    }
});

const routeModule: Array<RouteRecordRaw> = [
    BadPageRoute
];

export default routeModule;