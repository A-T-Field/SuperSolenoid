/*
 * @Author: maggot-code
 * @Date: 2021-10-28 11:27:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-30 10:30:34
 * @Description: file content
 */
import type { App } from 'vue';

import {
    create as createNaiveUI,
    zhCN,
    dateZhCN,

    NConfigProvider,
    NLoadingBarProvider,
    NMessageProvider,

    NDataTable,
    NTable,
    NPagination,
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
    NBreadcrumbItem,
    NScrollbar
} from 'naive-ui';

const naiveUI = createNaiveUI({
    components: [
        NConfigProvider,
        NLoadingBarProvider,
        NMessageProvider,

        NDataTable,
        NTable,
        NPagination,
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
        NBreadcrumbItem,
        NScrollbar
    ]
});

function useNaiveUI(app: App<Element>, appextend: App<Element>): void {
    app.use(naiveUI);
    appextend.use(naiveUI);
}

export {
    NAvatar,
    NDataTable,
    NTable,
    NPagination,
    NButton,
    NForm,
    NFormItem,

    zhCN,
    dateZhCN,
    naiveUI,
};

export default useNaiveUI;
