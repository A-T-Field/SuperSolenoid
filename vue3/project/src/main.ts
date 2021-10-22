/*
 * @Author: maggot-code
 * @Date: 2021-10-14 15:36:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-10-22 14:29:47
 * @Description: file content
 */
import { createApp } from 'vue';
import { default as UseVueRouter } from '@/router';
import { default as UseVuex } from '@/store';
import 'normalize.css';

import App from '@/App.vue';

const app = createApp(App);

app.use(UseVueRouter);
app.use(UseVuex);

app.mount('#app');
