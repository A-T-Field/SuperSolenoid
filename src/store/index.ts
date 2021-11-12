/*
 * @Author: maggot-code
 * @Date: 2021-11-12 10:09:49
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-12 10:13:38
 * @Description: file content
 */
import type { App } from 'vue';

import { createStore } from 'vuex';

const vuex = createStore({});

function UseVuex(app: App<Element>): void {
    app.use(vuex);
}

export default UseVuex;