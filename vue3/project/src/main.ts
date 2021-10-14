/*
 * @Author: maggot-code
 * @Date: 2021-10-14 15:36:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-10-14 18:08:35
 * @Description: file content
 */
import { createApp } from 'vue';
import { default as UseVueRouter } from '@/router';
import { default as UseVuex } from '@/store';

import App from '@/App.vue';

console.log(import.meta.env);
console.log(import.meta.env.VITE_APP_TITLE);

const app = createApp(App);

app.use(UseVueRouter);
app.use(UseVuex);

app.mount('#app');
