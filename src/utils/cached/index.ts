/*
 * @Author: maggot-code
 * @Date: 2021-11-10 14:11:29
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-16 18:06:36
 * @Description: file content
 */
import { default as Cached } from '@/utils/cached/cached';

const {
    VITE_APP_PREFIX_KEY,
    VITE_APP_ROUTING_KEY,
    VITE_APP_POWER_KEY
} = import.meta.env;

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

export const setPowerCached = <P = any>(power: P) => {
    localCached.set(VITE_APP_POWER_KEY, power);
}

export const getPowerCached = () => localCached.get(VITE_APP_POWER_KEY);

export const delPowerCached = () => localCached.del(VITE_APP_POWER_KEY);

export const useSessionCached = () => sessionCached;