/*
 * @Author: maggot-code
 * @Date: 2021-11-10 10:33:04
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-18 16:10:51
 * @Description: file content
 */
import type { RouteMeta, RouteRecordName } from "vue-router";
import "vue-router";

declare module "vue-router" {
    interface RouteMeta {
        // 用来标识为动态路由
        async?: boolean;
        view?: string;
        // 父节点 (name)
        parent?: string;
        // 标题
        title?: string;
        // 是否禁用
        isDisabled?: boolean;
        // 是否缓存
        isKeepAlive?: boolean;
        // 是否作用在导航路由
        isNavRoute?: boolean;
        // 导航路由标识 (name)
        navActive?: string;
        // 是否作用在菜单路由
        isMenuRoute?: boolean;
        // 菜单路由标识 (name)
        menuActive?: string;
        // 是否需要访问权限
        hasPower?: boolean;
        // 是否限制子路由访问权限 (如果父节点需要访问权限则忽略该设置，一律为 true [需要权限])
        hasChildPower?: boolean;
        // 是否需要排序
        hasSort?: boolean;
        // 排序值
        sort?: number;
        // 是否使用外部链接
        useFrameSrc?: boolean;
        // 外部链接地址
        frameSrc?: string;
        // 额外属性
        [key: string]: any;
    }

    interface RecordRawMeta {
        (name: RouteRecordName, meta: RouteMeta): RouteMeta;
    }

    abstract class SetRouteMeta {
        setMetaAsync(meta: RouteMeta): boolean;
        setMetaView(meta: RouteMeta): string;
        setMetaParent(meta: RouteMeta): string;
        setMetaTitle(name: RouteRecordName, meta: RouteMeta): string;
        setMetaIsDisabled(meta: RouteMeta): boolean;
        setMetaIsKeepAlive(meta: RouteMeta): boolean;
        setMetaIsNavRoute(meta: RouteMeta): boolean;
        setMetaNavActive(name: RouteRecordName, meta: RouteMeta): string;
        setMetaIsMenuRoute(meta: RouteMeta): boolean;
        setMetaMenuActive(name: RouteRecordName, meta: RouteMeta): string;
        setMetaHasPower(meta: RouteMeta): boolean;
        setMetaHasChildPower(meta: RouteMeta): boolean;
        setMetaHasSort(meta: RouteMeta): boolean;
        setMetaSort(meta: RouteMeta): number;
        setMetaUseFrameSrc(meta: RouteMeta): boolean;
        setMetaFrameSrc(meta: RouteMeta): string;
    }

    interface VueRouterOptions { }
}