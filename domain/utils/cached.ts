/*
 * @Author: maggot-code
 * @Date: 2021-11-10 14:11:29
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-10 14:11:29
 * @Description: file content
 */
import { default as Cached } from '$/cache';

const { VITE_APP_PREFIX_KEY } = import.meta.env;

const localCached = new Cached({
    prefixKey: VITE_APP_PREFIX_KEY,
    storage: localStorage
});

const sessionCached = new Cached({
    prefixKey: VITE_APP_PREFIX_KEY,
    storage: sessionStorage
});

export const useLocalCached = () => localCached;

export const useSessionCached = () => sessionCached;