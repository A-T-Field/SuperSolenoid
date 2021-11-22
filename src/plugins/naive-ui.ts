/*
 * @Author: maggot-code
 * @Date: 2021-10-28 11:27:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-22 14:20:58
 * @Description: file content
 */
import type { App } from 'vue';

import {
    create as createNaiveUI,

    NLoadingBarProvider,
    NMessageProvider,

    NBadge,
    NAvatar,
    NPopover,
    NSpace,
    NLayout,
    NLayoutContent,
    NLayoutFooter,
    NLayoutHeader,
    NLayoutSider,
    NMenu,
    NDropdown,
    NButton,
    NButtonGroup,
    NForm,
    NFormItem,
    NInput,
    NBreadcrumb,
    NBreadcrumbItem
} from 'naive-ui';

const naiveUI = createNaiveUI({
    components: [
        NLoadingBarProvider,
        NMessageProvider,

        NBadge,
        NAvatar,
        NPopover,
        NSpace,
        NLayout,
        NLayoutContent,
        NLayoutFooter,
        NLayoutHeader,
        NLayoutSider,
        NMenu,
        NDropdown,
        NButton,
        NButtonGroup,
        NForm,
        NFormItem,
        NInput,
        NBreadcrumb,
        NBreadcrumbItem
    ]
});

function useNaiveUI(app: App<Element>, appextend: App<Element>): void {
    app.use(naiveUI);
    appextend.use(naiveUI);
}

export {
    naiveUI,
};

export default useNaiveUI;
