/*
 * @Author: maggot-code
 * @Date: 2021-10-14 15:36:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-10-28 18:01:17
 * @Description: file content
 */
import type { App } from 'vue';
import { createApp } from 'vue';
import { default as UseNaiveUI } from '@/plugins/naive-ui';
import { default as UseVueRouter } from '@/router';
import { default as UseVuex } from '@/store';
import 'normalize.css';

import AppView from '@/App.vue';

function bootstrap(app: App): void {
    UseNaiveUI(app);
    UseVuex(app);
    UseVueRouter(app);
    app.mount('#app', true);
}

void bootstrap(createApp(AppView));