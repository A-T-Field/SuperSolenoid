/*
 * @Author: maggot-code
 * @Date: 2021-11-10 14:11:29
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-21 19:21:27
 * @Description: file content
 */
import { default as Cached } from '@/utils/cached/cached';
import { isNil } from '../is';

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

export const getRoutingCached = () => {
    const routing = localCached.get(VITE_APP_ROUTING_KEY)

    isNil(routing) && localCached.del(VITE_APP_ROUTING_KEY);

    return routing as any;
}

export const delRoutingCached = () => localCached.del(VITE_APP_ROUTING_KEY);

export const setPowerCached = <P = any>(power: P) => {
    localCached.set(VITE_APP_POWER_KEY, power);
}

export const getPowerCached = () => {
    const power = localCached.get(VITE_APP_POWER_KEY);

    isNil(power) && localCached.del(VITE_APP_POWER_KEY);

    return power as any;
}

export const delPowerCached = () => localCached.del(VITE_APP_POWER_KEY);

export const useSessionCached = () => sessionCached;