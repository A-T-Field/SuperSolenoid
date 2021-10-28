/*
 * @Author: maggot-code
 * @Date: 2021-10-28 11:27:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-10-28 17:43:26
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

function UseNaiveUI(app: App<Element>): void {
    app.use(naiveUI)
}

export {
    naiveUI
};

export default UseNaiveUI;
