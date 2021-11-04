/*
 * @Author: maggot-code
 * @Date: 2021-10-22 13:59:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-04 17:17:49
 * @Description: file content
 */
import type { VNode } from 'vue';
import "vue-router";

interface RouteRouting {
    parent?: string
}

export declare type powerGather = string[];

/**
 * @description: 自定义路由额外携带信息
 */
declare module "vue-router" {
    interface RouteMeta {
        // 父节点name
        readonly parent?: string;
        // 标题
        readonly title?: string;
        // 图标
        readonly icon?: string;
        // 是否禁用
        readonly isDisabled?: boolean;
        // 是否缓存
        readonly isKeepAlive?: boolean;
        // 是否作用在导航路由
        readonly isNavRoute?: boolean;
        // 导航路由标识
        readonly activeNav?: string;
        // 是否作用在菜单路由
        readonly isMenuRoute?: boolean;
        // 菜单路由标识
        readonly activeMenu?: string;
        // 是否需要身份验证
        readonly hasPower?: boolean;
        // 子路由是否需要验证
        readonly hasChildrenPower?: boolean;
        readonly powerGather?: powerGather;
        // 是否需要排序
        readonly hasSort?: boolean;
        // 排序值
        readonly sort?: number;
        // 是否需要外链
        readonly hasFrameSrc?: boolean;
        // 外链地址
        readonly frameSrc?: string;
        readonly [key: string]: any;
    }
}