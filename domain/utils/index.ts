/*
 * @Author: maggot-code
 * @Date: 2021-11-10 11:30:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-10 14:15:16
 * @Description: file content
 */
import type { App, Component } from 'vue';

import { isEmptyString } from '$/utils/is';

export const componentInstall = (app: App<Element>) => (component: Component) => {
    const { name } = component;
    return app.component(name ?? `ATF${Date.now()}`, component);
};

export const getOrigin = (): string => {
    const { protocol, hostname } = window.location;

    return `${protocol}//${hostname}`;
}

export const getPort = (): number => {
    const { port } = window.location;

    return isEmptyString(port) ? 80 : +port;
}