/*
 * @Author: maggot-code
 * @Date: 2021-11-12 10:09:49
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-12 13:21:47
 * @Description: file content
 */
import type { App } from 'vue';

import { createStore } from 'vuex';

const vuex = createStore({});

function useVuex(app: App<Element>): void {
    app.use(vuex);
}

export default useVuex;