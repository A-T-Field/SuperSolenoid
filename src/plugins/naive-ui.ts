/*
 * @Author: maggot-code
 * @Date: 2021-10-28 11:27:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-11 17:38:29
 * @Description: file content
 */
import type { App } from 'vue';

import {
    create as createNaiveUI,

    NLoadingBarProvider,
    NMessageProvider,

    NButton,
    NButtonGroup,
    NForm,
    NFormItem,
    NInput
} from 'naive-ui';

const naiveUI = createNaiveUI({
    components: [
        NLoadingBarProvider,
        NMessageProvider,

        NButton,
        NButtonGroup,
        NForm,
        NFormItem,
        NInput
    ]
});

function UseNaiveUI(app: App<Element>, appextend: App<Element>): void {
    app.use(naiveUI);
    appextend.use(naiveUI);
}

export {
    naiveUI,
};

export default UseNaiveUI;
