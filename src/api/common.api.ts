/*
 * @Author: maggot-code
 * @Date: 2021-11-11 10:42:02
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-15 17:43:51
 * @Description: file content
 */
import { atfApi } from '@/api/request';
import { RequestMethodsEnum } from '$/api/enum';
const send = atfApi.send;

export const login = <T = any>(data: T) => send({
    url: '/login',
    method: RequestMethodsEnum.POST,
    data,
});

export const checkUser = () => send({
    url: '/user/check',
    method: RequestMethodsEnum.GET
})

export const getRouting = () => send({
    url: '/routing/get',
    method: RequestMethodsEnum.GET
})