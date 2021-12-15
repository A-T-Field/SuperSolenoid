/*
 * @Author: maggot-code
 * @Date: 2021-10-14 15:36:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-22 14:07:01
 * @Description: file content
 */
import type { App } from 'vue';
import { createApp } from 'vue';

import { default as useNaiveUI } from '@/plugins/naive-ui';
import { default as useVuex } from '@/store';
import { default as useVueRouter } from '@/router';
import { default as useLayout } from '@/layout';

import 'normalize.css';
import '@/assets/icon/iconfont.css';

import AppView from '@/App.vue';
import AppLication from '@/Application.vue';

function bootstrap(appextend: App, app: App): void {
    useNaiveUI(app, appextend);

    useVuex(app);

    useLayout(app);

    appextend.mount("#application", true);

    useVueRouter(app)
        .isReady()
        .then(() => {
            app.mount('#app', true);
        });
};

void bootstrap(createApp(AppLication), createApp(AppView));