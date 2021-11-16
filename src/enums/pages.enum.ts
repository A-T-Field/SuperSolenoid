/*
 * @Author: maggot-code
 * @Date: 2021-11-10 14:22:23
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-16 17:35:03
 * @Description: file content
 */
export enum PagesEnum {
    // 根
    BASE_ROOT = '/',
    BASE_ROOT_NAME = 'root',
    BASE_ROOT_TITLE = 'root',
    // 准备
    BASE_READY = '/ready',
    BASE_READY_NAME = 'ready',
    BASE_READY_TITLE = '准备',
    // 登录
    BASE_LOGIN = '/login',
    BASE_LOGIN_NAME = 'login',
    BASE_LOGIN_TITLE = '登录',
    // 注册
    BASE_REGISTER = '/register',
    BASE_REGISTER_NAME = 'register',
    BASE_REGISTER_TITLE = '注册',
    // 权限
    ERROR_NOT_POWER = '/403',
    ERROR_NOT_POWER_NAME = 'notpower',
    ERROR_NOT_POWER_TITLE = '没有权限',
    // 未找到
    ERROR_NOT_PAGE = '/404',
    ERROR_NOT_PAGE_NAME = 'notpage',
    ERROR_NOT_PAGE_TITLE = '没有找到',
    // 崩溃
    ERROR_CRASH = '/500',
    ERROR_CRASH_NAME = 'crash',
    ERROR_CRASH_TITLE = '服务崩溃',
    // 异常
    ERROR_UNUSUAL = '/:pathMatch(.*)*',
    ERROR_UNUSUAL_NAME = 'unusual',
    ERROR_UNUSUAL_TITLE = '异常地址'
}