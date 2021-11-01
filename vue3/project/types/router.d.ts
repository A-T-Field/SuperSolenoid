/*
 * @Author: maggot-code
 * @Date: 2021-10-22 13:59:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-01 16:01:58
 * @Description: file content
 */
import type { VNode } from 'vue';
import "vue-router";

export declare type powerGather = string[];

/**
 * @description: 路由表结构体
 */
export declare interface RoutingRawStruct { }

/**
 * @description: 自定义路由额外携带信息
 */
declare module "vue-router" {
    interface RouteMeta {
        readonly title?: string;
        readonly icon?: string;

        readonly isDisabled?: boolean;

        readonly isKeepAlive?: boolean;

        readonly isNavRoute?: boolean;
        readonly activeNav?: string;

        readonly isMenuRoute?: boolean;
        readonly activeMenu?: string;

        readonly hasPower?: boolean;
        readonly hasChildrenPower?: boolean;
        readonly powerGather?: powerGather;

        readonly hasSort?: boolean;
        readonly sort?: number;

        readonly hasFrameSrc?: boolean;
        readonly frameSrc?: string;

        readonly [key: string]: any;
    }
}