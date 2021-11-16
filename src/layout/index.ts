/*
 * @Author: maggot-code
 * @Date: 2021-11-10 11:12:55
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-16 17:21:00
 * @Description: file content
 */
import type { App, Component } from 'vue';

import { componentInstall } from '@/utils';

import { default as LayoutRouterView } from './layout-router-view';
import { default as LayoutMain } from './layout-main';

const Components: Array<Component> = [
    LayoutRouterView,
    LayoutMain
];

function useLayout(app: App<Element>) {
    return Components.map(componentInstall(app));
}

export default useLayout;