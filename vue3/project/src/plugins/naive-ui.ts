/*
 * @Author: maggot-code
 * @Date: 2021-10-28 11:27:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-10-28 14:46:27
 * @Description: file content
 */
import type { App } from 'vue';

import {
    create as createNaiveUI,
    NButton,
    NButtonGroup
} from 'naive-ui';

const naiveUI = createNaiveUI({
    components: [
        NButton,
        NButtonGroup
    ]
});

const UseNaiveUI = (app: App<Element>) => app.use(naiveUI);

export {
    naiveUI
};

export default UseNaiveUI;
