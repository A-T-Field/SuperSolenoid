/*
 * @Author: maggot-code
 * @Date: 2021-11-02 09:50:13
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-02 11:04:53
 * @Description: file content
 */
import { default as Cached } from '@/hooks/use-cached';

const { VITE_APP_PREFIX_KEY } = import.meta.env;

export const useLocalCached = () => new Cached({
    prefixKey: VITE_APP_PREFIX_KEY,
    storage: localStorage
});

export const useSessionCached = () => new Cached({
    prefixKey: VITE_APP_PREFIX_KEY,
    storage: sessionStorage
});