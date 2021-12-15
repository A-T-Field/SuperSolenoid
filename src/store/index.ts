/*
 * @Author: maggot-code
 * @Date: 2021-11-12 10:09:49
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-16 17:18:05
 * @Description: file content
 */
import type { App } from 'vue';

import { createStore } from 'vuex';

import { default as useRouterStoreModule } from '@/store/modules/router';

const vuex = createStore({
    modules: {
        router: useRouterStoreModule()
    }
});

function useVuex(app: App<Element>): void {
    app.use(vuex);
}

export {
    vuex
}

export default useVuex;