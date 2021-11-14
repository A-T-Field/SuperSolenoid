/*
 * @Author: maggot-code
 * @Date: 2021-11-11 10:42:02
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-14 21:08:56
 * @Description: file content
 */
import { atfApi } from '@/api/request';
import { RequestMethodsEnum } from '$/api/enum';
const send = atfApi.send;

export const login = <T = any>(data: T) => send({
    url: '/login',
    method: RequestMethodsEnum.POST,
    data,
})

export const checkUser = () => send({
    url: '/check/user',
    method: RequestMethodsEnum.GET
})