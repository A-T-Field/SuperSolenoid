/*
 * @Author: maggot-code
 * @Date: 2021-11-10 14:11:29
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-16 17:19:30
 * @Description: file content
 */
import { default as Cached } from '@/utils/cached/cached';

const { VITE_APP_PREFIX_KEY, VITE_APP_ROUTING_KEY } = import.meta.env;

const localCached = new Cached({
    prefixKey: VITE_APP_PREFIX_KEY,
    storage: localStorage
});

const sessionCached = new Cached({
    prefixKey: VITE_APP_PREFIX_KEY,
    storage: sessionStorage
});

export const useLocalCached = () => localCached;

export const setRoutingCached = <R = any>(routing: R) => {
    localCached.set(VITE_APP_ROUTING_KEY, routing);
};

export const getRoutingCached = () => localCached.get(VITE_APP_ROUTING_KEY);

export const delRoutingCached = () => localCached.del(VITE_APP_ROUTING_KEY);

export const useSessionCached = () => sessionCached;