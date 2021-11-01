/*
 * @Author: maggot-code
 * @Date: 2021-10-14 15:36:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-01 11:14:59
 * @Description: file content
 */
import type { App } from 'vue';
import { createApp } from 'vue';

import { default as UseNaiveUI } from '@/plugins/naive-ui';
import { default as UseVueRouter } from '@/router';
import { default as UseVuex } from '@/store';

import 'normalize.css';

import AppView from '@/App.vue';
import AppLication from '@/Application.vue';


function bootstrap(appextend: App, app: App): void {
    UseNaiveUI(app, appextend);
    UseVuex(app);
    UseVueRouter(app);
    appextend.mount("#application", true);
    app.mount('#app', true);
};

void bootstrap(createApp(AppLication), createApp(AppView));