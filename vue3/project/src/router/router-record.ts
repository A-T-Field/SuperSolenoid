/*
 * @Author: maggot-code
 * @Date: 2021-10-28 14:38:44
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-10-28 17:45:30
 * @Description: file content
 */
import type { RouteRecordRaw, RouteRecordName, RouteMeta } from 'vue-router';

function setupRecordRawMeta(name: RouteRecordName, meta: RouteMeta): RouteMeta {
    console.log(name, meta);

    return meta;
};

function UseRouteRecordRaw(recordRaw: RouteRecordRaw): RouteRecordRaw {
    const { name, meta } = recordRaw;

    if (name && meta) recordRaw.meta = setupRecordRawMeta(name, meta);

    return recordRaw;
}

export default UseRouteRecordRaw;