/*
 * @Author: maggot-code
 * @Date: 2021-11-15 09:51:07
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-17 13:19:40
 * @Description: file content
 */
import { getCookie, setCookie, delCookie } from '@/utils/cookie/cookie';

const { VITE_APP_PREFIX_KEY, VITE_APP_TOKEN_KEY } = import.meta.env;

const getKey = (key: string) => `${VITE_APP_PREFIX_KEY}${key}token`.toUpperCase();

export const getToken = () => getCookie(getKey(VITE_APP_TOKEN_KEY));

export const setToken = (value: string) => setCookie(getKey(VITE_APP_TOKEN_KEY), value, 1);

export const delToken = () => delCookie(getKey(VITE_APP_TOKEN_KEY));