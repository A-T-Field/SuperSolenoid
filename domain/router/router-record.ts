/*
 * @Author: maggot-code
 * @Date: 2021-11-10 13:17:49
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-12 13:17:37
 * @Description: file content
 */
import type { RecordRawMeta, SetRouteMeta, RouteRecordRaw, RouteRecordName } from 'vue-router';

import {
    isEmptyString,
    isBoolean,
    isNumber,
    isNil
} from '$/utils/is';

export const RouteMetaHandler: SetRouteMeta = {
    setMetaParent: function ({ parent }): string {
        return isNil(parent) ? "" : parent;
    },
    setMetaTitle: function (name, { title }): string {
        return isEmptyString(title) ? name as string : title;
    },
    setMetaIsDisabled: function ({ isDisabled }): boolean {
        return isBoolean(isDisabled) ? isDisabled : false;
    },
    setMetaIsKeepAlive: function ({ isKeepAlive }): boolean {
        return isBoolean(isKeepAlive) ? isKeepAlive : false;
    },
    setMetaIsNavRoute: function ({ isNavRoute }): boolean {
        return isBoolean(isNavRoute) ? isNavRoute : false;
    },
    setMetaNavActive: function (name: RouteRecordName, { navActive }): string {
        return isEmptyString(navActive) ? name as string : navActive;
    },
    setMetaIsMenuRoute: function ({ isMenuRoute }): boolean {
        return isBoolean(isMenuRoute) ? isMenuRoute : false;
    },
    setMetaMenuActive: function (name: RouteRecordName, { menuActive }): string {
        return isEmptyString(menuActive) ? name as string : menuActive;
    },
    setMetaHasPower: function ({ hasPower }): boolean {
        return isBoolean(hasPower) ? hasPower : false;
    },
    setMetaHasChildPower: function (meta): boolean {
        const { hasChildPower } = meta;
        const hasPower = this.setMetaHasPower(meta);

        if (hasPower) return true;

        return isBoolean(hasChildPower) ? hasChildPower : false;
    },
    setMetaHasSort: function ({ hasSort }): boolean {
        return isBoolean(hasSort) ? hasSort : false;
    },
    setMetaSort: function (meta): number {
        const { sort } = meta;

        const hasSort = this.setMetaHasSort(meta);

        return hasSort && isNumber(sort) ? sort : 0;
    },
    setMetaUseFrameSrc: function ({ useFrameSrc }): boolean {
        return isBoolean(useFrameSrc) ? useFrameSrc : false;
    },
    setMetaFrameSrc: function (meta): string {
        const { frameSrc } = meta;

        const useFrameSrc = this.setMetaUseFrameSrc(meta);

        return useFrameSrc && !isEmptyString(frameSrc) ? frameSrc : "";
    }
}

export const setupRecordRawMeta: RecordRawMeta = (name, meta) => {
    return Object.assign({}, meta, {
        parent: RouteMetaHandler.setMetaParent(meta),
        title: RouteMetaHandler.setMetaTitle(name, meta),
        isDisabled: RouteMetaHandler.setMetaIsDisabled(meta),
        isKeepAlive: RouteMetaHandler.setMetaIsKeepAlive(meta),
        isNavRoute: RouteMetaHandler.setMetaIsNavRoute(meta),
        navActive: RouteMetaHandler.setMetaNavActive(name, meta),
        isMenuRoute: RouteMetaHandler.setMetaIsMenuRoute(meta),
        menuActive: RouteMetaHandler.setMetaMenuActive(name, meta),
        hasPower: RouteMetaHandler.setMetaHasPower(meta),
        hasChildPower: RouteMetaHandler.setMetaHasChildPower(meta),
        hasSort: RouteMetaHandler.setMetaHasSort(meta),
        sort: RouteMetaHandler.setMetaHasChildPower(meta),
        useFrameSrc: RouteMetaHandler.setMetaUseFrameSrc(meta),
        frameSrc: RouteMetaHandler.setMetaFrameSrc(meta),
    });
}

function useRouteRecordRaw(options: RouteRecordRaw): RouteRecordRaw {
    const { name, meta } = options;

    if (name && meta) options.meta = setupRecordRawMeta(name, meta);

    return options;
}

export default useRouteRecordRaw;