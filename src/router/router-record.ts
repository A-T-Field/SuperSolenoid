/*
 * @Author: maggot-code
 * @Date: 2021-10-28 14:38:44
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-10 10:09:31
 * @Description: file content
 */
import type { RouteRecordRaw, RouteRecordName, RouteMeta } from 'vue-router';
import type { powerGather } from '#/router';

import {
    isEmptyString,
    isBoolean,
    isNumber,
    isNil
} from '@/utils/is-type';
import { PagesEnum } from '@/enums/pages-enum';

function setMateParent(meta: RouteMeta): string {
    const { parent } = meta;

    return isNil(parent) ? PagesEnum.BASE_ROOT_NAME : parent;
}

function setMetaTitle(name: RouteRecordName, meta: RouteMeta): string {
    const { title } = meta;

    return isEmptyString(title) ? name as string : title;
};

function setMetaIcon(meta: RouteMeta): string {
    return "";
};

function setMetaIsDisabled(meta: RouteMeta): boolean {
    const { isDisabled } = meta;

    return isBoolean(isDisabled) ? isDisabled : false;
};

function setMetaIsKeepAlive(meta: RouteMeta): boolean {
    const { isKeepAlive } = meta;

    return isBoolean(isKeepAlive) ? isKeepAlive : false;
};

function setMetaIsNavRoute(meta: RouteMeta): boolean {
    const { isNavRoute } = meta;

    return isBoolean(isNavRoute) ? isNavRoute : false;
};

function setMetaActiveNav(name: RouteRecordName, meta: RouteMeta): string {
    const { activeNav } = meta;

    return isEmptyString(activeNav) ? name as string : activeNav;
};

function setMetaIsMenuRoute(meta: RouteMeta): boolean {
    const { isMenuRoute } = meta;

    return isBoolean(isMenuRoute) ? isMenuRoute : false;
};

function setMetaActiveMenu(name: RouteRecordName, meta: RouteMeta): string {
    const { activeMenu } = meta;

    return isEmptyString(activeMenu) ? name as string : activeMenu;
};

function setMetaHasPower(meta: RouteMeta): boolean {
    const { hasPower } = meta;

    return isBoolean(hasPower) ? hasPower : false;
};

function setMetaChildrenPower(meta: RouteMeta): boolean {
    const { hasChildrenPower } = meta;

    const hasPower = setMetaHasPower(meta);

    if (hasPower) return true;

    return isBoolean(hasChildrenPower) ? hasChildrenPower : false;
};

function setMetaPowerGather(meta: RouteMeta): powerGather {
    return [];
};

function setMetaHasSort(meta: RouteMeta): boolean {
    const { hasSort } = meta;

    return isBoolean(hasSort) ? hasSort : false;
};

function setMetaSort(meta: RouteMeta): number {
    const { sort } = meta;

    const hasSort = setMetaHasSort(meta);

    return hasSort && isNumber(sort) ? sort : 0;
};

function setMetaHasFrameSrc(meta: RouteMeta): boolean {
    const { hasFrameSrc } = meta;

    return isBoolean(hasFrameSrc) ? hasFrameSrc : false;
};

function setMetaFrameSrc(meta: RouteMeta): string {
    const { frameSrc } = meta;
    const hasFrameSrc = setMetaHasFrameSrc(meta);

    return hasFrameSrc && !isEmptyString(frameSrc) ? frameSrc : "";
};

function setupRecordRawMeta(name: RouteRecordName, meta: RouteMeta): RouteMeta {
    return {
        parent: setMateParent(meta),
        title: setMetaTitle(name, meta),
        icon: setMetaIcon(meta),
        isDisabled: setMetaIsDisabled(meta),
        isKeepAlive: setMetaIsKeepAlive(meta),
        isNavRoute: setMetaIsNavRoute(meta),
        activeNav: setMetaActiveNav(name, meta),
        isMenuRoute: setMetaIsMenuRoute(meta),
        activeMenu: setMetaActiveMenu(name, meta),
        hasPower: setMetaHasPower(meta),
        hasChildrenPower: setMetaChildrenPower(meta),
        powerGather: setMetaPowerGather(meta),
        hasSort: setMetaHasSort(meta),
        sort: setMetaSort(meta),
        hasFrameSrc: setMetaHasFrameSrc(meta),
        frameSrc: setMetaFrameSrc(meta)
    }
};

function UseRouteRecordRaw(recordRaw: RouteRecordRaw): RouteRecordRaw {
    const { name, meta } = recordRaw;

    if (name && meta) recordRaw.meta = setupRecordRawMeta(name, meta);

    return recordRaw;
};

export default UseRouteRecordRaw;