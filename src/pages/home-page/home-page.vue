<!--
 * @Author: maggot-code
 * @Date: 2021-11-17 11:18:39
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-21 23:08:01
 * @Description: file content
-->
<script setup lang='ts'>
import type { RouteRecordName, RouteRecordRaw, RouteLocationNormalizedLoaded } from 'vue-router';

import { default as LayoutRouterView } from '@/layout/layout-router-view';
import { default as HeadMain } from '@/pages/home-page/components/head-main';
import { default as BodyMain } from '@/pages/home-page/components/body-main';
import { default as NavMain } from '@/pages/home-page/components/nav-main';
import { default as MenuMain } from '@/pages/home-page/components/menu-main';

import { ref, computed, watch, onBeforeUnmount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { filterNavRoutes, filterMenuRoutes } from '@/router/router-utils';

const router = useRouter();
const route = useRoute();

const navRoutes = filterNavRoutes(router);
const navActive = ref<RouteRecordName>("");
const menuRoutes = ref<Array<RouteRecordRaw>>([]);
const menuActive = ref<RouteRecordName>("");
const useMenu = computed(() => menuRoutes.value.length > 0);

const routeWatch = watch(route, (nowRoute) => {
    navActive.value = getNavActive(nowRoute);
    menuRoutes.value = getMenuRoutes(nowRoute);
    menuActive.value = getMenuActive(nowRoute);
}, { immediate: true });

function handlerNavActive(name: RouteRecordName): void {
    router.push({ name });
}
function handlerNavRoute(route: RouteRecordRaw): void {
    menuRoutes.value = filterMenuRoutes(route.children ?? []);
}
function handlerMenuActive(name: RouteRecordName): void {
    router.push({ name });
}

function getNavActive(route: RouteLocationNormalizedLoaded): RouteRecordName {
    return route.matched.filter(route => route.meta.isNavRoute)[0]?.name ?? "";
}
function getMenuRoutes(route: RouteLocationNormalizedLoaded): Array<RouteRecordRaw> {
    const navRoutes = route.matched.filter(route => route.meta.isNavRoute)[0]?.children ?? [];

    return filterMenuRoutes(navRoutes);
}
function getMenuActive(route: RouteLocationNormalizedLoaded): RouteRecordName {
    return route.matched.filter(route => route.meta.isMenuRoute)[0]?.name ?? "";
}

onBeforeUnmount(() => {
    routeWatch();
})
</script>

<template>
    <main class="w100 h100 ofh ATF-home">
        <section class="w100 ofh ATF-home-head">
            <head-main>
                <template #nav>
                    <nav-main
                        :routes="navRoutes"
                        :active="navActive"
                        @wrap:active="handlerNavActive"
                        @wrap:route="handlerNavRoute"
                    ></nav-main>
                </template>
            </head-main>
        </section>

        <section class="w100 ofh ATF-home-body">
            <body-main :use-sider="useMenu">
                <template #sider>
                    <menu-main
                        :routes="menuRoutes"
                        :active="menuActive"
                        @wrap:active="handlerMenuActive"
                    ></menu-main>
                </template>

                <template #header>顶部</template>

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