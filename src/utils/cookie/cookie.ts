/*
 * @Author: maggot-code
 * @Date: 2021-11-15 09:31:42
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-20 09:36:25
 * @Description: file content
 */
import Cookies from 'js-cookie';
import { isNil, isEmptyString } from '@/utils/is';

export const getCookie = (cookieName: string) => Cookies.get(cookieName) || false;

export const setCookie = (cookieName: string, value: any, expires?: number) => Cookies.set(cookieName, value, { expires: expires ?? 1 });

export const delCookie = (cookieName?: string) => {
    if (isNil(cookieName) || isEmptyString(cookieName)) return;

    return Cookies.remove(cookieName);
}