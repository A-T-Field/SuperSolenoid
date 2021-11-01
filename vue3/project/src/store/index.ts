/*
 * @Author: maggot-code
 * @Date: 2021-10-14 18:05:25
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-01 11:14:48
 * @Description: file content
 */
import type { App } from 'vue';
import { createStore, createLogger } from 'vuex';

const modules = import.meta.globEager('./modules/**/*.store.ts');

const vueStore = createStore({
    modules: modules,
    strict: import.meta.env.VITE_APP_USE_DEBUG,
    plugins: import.meta.env.VITE_APP_USE_DEBUG ? [createLogger()] : []
});

function UseVuex(app: App<Element>): void {
    app.use(vueStore);
};

export default UseVuex;