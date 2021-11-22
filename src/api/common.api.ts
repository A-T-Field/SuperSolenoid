/*
 * @Author: maggot-code
 * @Date: 2021-11-11 10:42:02
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-21 23:14:53
 * @Description: file content
 */
import { atfApi } from '@/api/request';
import { RequestMethodsEnum } from '@/enums/api.enum';
const send = atfApi.send;

// 登录
export const login = <T = any>(data: T) => send({
    url: '/login',
    method: RequestMethodsEnum.POST,
    data,
});

// 获取权限
export const getPower = () => send({
    url: '/power/get',
    method: RequestMethodsEnum.GET
});

// 获取路由
export const getRouting = <T = any>(data: T) => send({
    url: '/routing/get',
    method: RequestMethodsEnum.POST,
    data
});