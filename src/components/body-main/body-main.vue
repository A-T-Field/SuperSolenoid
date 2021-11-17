<!--
 * @Author: maggot-code
 * @Date: 2021-11-17 13:31:55
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-17 14:58:00
 * @Description: file content
-->
<script setup lang='ts'>
import { ref } from 'vue';
const siderStatus = ref(false);
function handlerCollapsed() {
    siderStatus.value = !siderStatus.value;
}
</script>

<template>
    <div class="w100 h100 ofh ATF-body-main">
        <n-space class="h100" item-style="height:100%;" size="large" :vertical="true">
            <n-layout class="h100" :has-sider="true" :embedded="true" :native-scrollbar="true">
                <n-layout-sider
                    class="h100"
                    :bordered="true"
                    :inverted="true"
                    :native-scrollbar="false"
                    :collapsed="siderStatus"
                    :collapsed-width="48"
                    :show-collapsed-content="false"
                    :show-trigger="true"
                    :width="240"
                    @collapse="handlerCollapsed"
                    @expand="handlerCollapsed"
                >
                    <slot name="sider"></slot>
                </n-layout-sider>

                <div class="w100 h100 ofh ATF-body-main-context">
                    <n-layout-header :bordered="true" :inverted="true">
                        <slot name="header"></slot>
                    </n-layout-header>

                    <n-layout-content
                        class="ATF-body-main-context-content"
                        :embedded="true"
                        :native-scrollbar="true"
                    >
                        <slot></slot>
                    </n-layout-content>

                    <n-layout-footer :bordered="true" :inverted="true">
                        <slot name="footer"></slot>
                    </n-layout-footer>
                </div>
            </n-layout>
        </n-space>
    </div>
</template>

<style scoped lang='scss'>
@import "./body-main.scss";
</style>