/*
 * @Author: maggot-code
 * @Date: 2021-10-14 15:36:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-11 09:49:04
 * @Description: file content
 */
import type { App } from 'vue';
import { createApp } from 'vue';

import { default as UseNaiveUI } from '@/plugins/naive-ui';
import { default as UseVueRouter } from '@/router';
import { default as UseLayout } from '@/layout';

import 'normalize.css';

import AppView from '@/App.vue';
import AppLication from '@/Application.vue';

function bootstrap(appextend: App, app: App): void {
    UseNaiveUI(app, appextend);

    UseVueRouter(app);

    UseLayout(app);

    appextend.mount("#application", true);

    app.mount('#app', true);
};

void bootstrap(createApp(AppLication), createApp(AppView));