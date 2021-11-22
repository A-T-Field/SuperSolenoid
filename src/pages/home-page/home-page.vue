<!--
 * @Author: maggot-code
 * @Date: 2021-11-17 11:18:39
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-22 11:23:33
 * @Description: file content
-->
<script setup lang='ts'>
import type { RouteRecordName } from 'vue-router';

import { default as LayoutRouterView } from '@/layout/layout-router-view';
import { default as MenuMain } from '@/pages/home-page/components/menu-main';

import { default as HeadMain } from '@/pages/home-page/components/head-main';
import { default as HeadLogo } from '@/pages/home-page/components/head-logo';
import { default as HeadTitle } from '@/pages/home-page/components/head-title';
import { default as HeadUser } from '@/pages/home-page/components/head-user';

import { default as BodyMain } from '@/pages/home-page/components/body-main';
import { default as BodyHeader } from '@/pages/home-page/components/body-header';
import { default as CrumbsMain } from '@/pages/home-page/components/crumbs-main';

import { ref, watch, onBeforeUnmount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { filterRoutes } from '@/router/router-utils';

const router = useRouter();
const route = useRoute();

const menuRoutes = filterRoutes(router);
const menuActive = ref<RouteRecordName>("");
const watchRoute = watch(route, (nowRoute) => {
    menuActive.value = nowRoute.name ?? "";
}, { immediate: true });

function handlerMenuActive(name: RouteRecordName) {
    router.push({ name });
}

onBeforeUnmount(() => {
    watchRoute();
})
</script>

<template>
    <main class="w100 h100 ofh ATF-home">
        <section class="w100 ofh ATF-home-head">
            <head-main>
                <template #logo>
                    <head-logo></head-logo>
                </template>

                <template #title>
                    <head-title></head-title>
                </template>

                <template #user>
                    <head-user></head-user>
                </template>
            </head-main>
        </section>

        <section class="w100 ofh ATF-home-body">
            <body-main>
                <template #sider>
                    <menu-main
                        :routes="menuRoutes"
                        :active="menuActive"
                        @wrap:active="handlerMenuActive"
                    ></menu-main>
                </template>

                <template #header>
                    <body-header>
                        <template #crumb>
                            <crumbs-main slot="crumb" @wrap-select="handlerMenuActive"></crumbs-main>
                        </template>
                    </body-header>
                </template>

                <template #default>
                    <layout-router-view></layout-router-view>
                </template>

                <template #footer>底部</template>
            </body-main>
        </section>
    </main>
</template>

<style scoped lang='scss'>
@import "./home-page.scss";
</style>