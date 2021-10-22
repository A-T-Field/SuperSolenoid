/*
 * @Author: maggot-code
 * @Date: 2021-10-22 13:59:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-10-22 15:10:07
 * @Description: file content
 */
import 'vue-router'

/**
 * @description: 路由信息定义
 * @hasPower 是否需要权限 false 不需要
 * @hasChildrenPower 是否子集需要权限 false 不需要 (如果hasPower true 则 hasChildrenPower 一定为 true)
 * @hasRender 是否使用此路由 true 使用
 * @hasNav 是否用于导航 false 不使用
 * @hasMenu 是否用于菜单 false 不使用
 * @title 标题
 * @icon 图标
 */
declare module 'vue-router' {
    interface RouteMeta {
        hasPower?: boolean,
        hasChildrenPower?: boolean,
        hasRender?: boolean,
        hasNav?: boolean,
        hasMenu?: boolean,
        title?: string,
        icon?: string | Icon
    }
}