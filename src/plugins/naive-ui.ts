/*
 * @Author: maggot-code
 * @Date: 2021-10-28 11:27:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 16:25:45
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
    NFormItemGridItem,
    NFormItemGi,
    NGrid,
    NGridItem,
    NGi,
    NInput,
    NBreadcrumb,
    NBreadcrumbItem,
    NScrollbar,
    NSpin,
    NTooltip,
    NTag
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
        NFormItemGridItem,
        NFormItemGi,
        NGrid,
        NGridItem,
        NGi,
        NInput,
        NBreadcrumb,
        NBreadcrumbItem,
        NScrollbar,
        NSpin,
        NTooltip,
        NTag
    ]
});

function useNaiveUI(app: App<Element>, appextend: App<Element>): void {
    app.use(naiveUI);
    appextend.use(naiveUI);
}

export {
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
    NBreadcrumb,
    NBreadcrumbItem,
    NScrollbar,
    NSpin,

    // form
    NButton,
    NButtonGroup,
    NForm,
    NFormItem,
    NFormItemGridItem,
    NFormItemGi,
    NGrid,
    NGridItem,
    NGi,
    NInput,
    NTooltip,
    NTag,

    zhCN,
    dateZhCN,
    naiveUI,
};

export default useNaiveUI;
