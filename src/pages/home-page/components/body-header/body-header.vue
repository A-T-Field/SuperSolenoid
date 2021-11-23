<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 09:47:24
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-23 09:27:40
 * @Description: file content
-->
<script setup lang='ts'>
import { default as IconImg } from '@/components/icon-img';

import { useRouter, useRoute } from 'vue-router';
import { default as useReloadPage } from '@/router/router-reload-page';

const router = useRouter();
const route = useRoute();

function handlerReloadPage() {
    useReloadPage(router, route);
}
</script>

<template>
    <div class="w100 ATF-body-header">
        <n-popover trigger="hover" placement="right">
            <template #trigger>
                <n-button
                    class="ATF-body-header-center ATF-body-header-reload"
                    type="default"
                    size="small"
                    :bordered="true"
                    :circle="true"
                    :dashed="true"
                    :tertiary="true"
                    :strong="true"
                    @click="handlerReloadPage"
                >
                    <icon-img name="ATF-sync"></icon-img>
                </n-button>
            </template>
            <span>刷新页面</span>
        </n-popover>

        <div class="ATF-body-header-center ATF-body-header-crumb">
            <slot name="crumb"></slot>
        </div>
    </div>
</template>

<style scoped lang='scss'>
@import "./body-header.scss";
</style>