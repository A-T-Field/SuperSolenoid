/*
 * @Author: maggot-code
 * @Date: 2021-11-10 11:30:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-16 17:20:10
 * @Description: file content
 */
import type { App, Component } from 'vue';

import { isEmptyString } from '@/utils/is';

export const componentInstall = (app: App<Element>) => (component: Component) => {
    const { name } = component;
    return app.component(name ?? `ATF${Date.now()}`, component);
};

export function getOrigin(): string {
    const { protocol, hostname } = window.location;

    return `${protocol}//${hostname}`;
}

export function getPort(): number {
    const { port } = window.location;

    return isEmptyString(port) ? 80 : +port;
}

export function urlBreakupParams(url: string): any {
    const params = {};
    const paramsString = url.split('?');
    if (paramsString.length <= 1) return {};

    paramsString[1].split('&').forEach(item => {
        const [key, val] = item.split('=');
        params[key] = val;
    });
    return params;
}

export function randomSection(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}