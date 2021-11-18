<!--
 * @Author: maggot-code
 * @Date: 2021-11-17 11:18:39
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-18 15:58:04
 * @Description: file content
-->
<script setup lang='ts'>
import type {
    RouteLocationNormalizedLoaded,
    RouteRecordName,
    RouteRecordRaw
} from 'vue-router';

import { default as LayoutRouterView } from '@/layout/layout-router-view';
import { default as HeadMain } from '@/components/head-main';
import { default as BodyMain } from '@/components/body-main';
import { default as NavMain } from '@/components/nav-main';
import { default as MenuMain } from '@/components/menu-main';

import { onBeforeUnmount, ref, toRaw, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

type routeActive = RouteRecordName | undefined | null;

const router = useRouter();
const route = useRoute();

const navRoutes = router.getRoutes();
const navActive = ref<routeActive>('');
const menuRoutes = ref<Array<RouteRecordRaw> | undefined>([]);
const menuActive = ref<routeActive>('');

const handlerRouteWatch = (nowRoute: RouteLocationNormalizedLoaded) => {
    const matchedLen = nowRoute.matched.length;
    const matchedIndex = matchedLen - 2 <= 0 ? 0 : matchedLen - 2;
    const { name: navName } = nowRoute.matched[matchedIndex];
    const { name: menuName } = nowRoute;

    navActive.value = navName;
    menuActive.value = menuName;
}
const routeWatch = watch(route, handlerRouteWatch, { immediate: true });

function handlerWrapRoute(nowRoute: RouteRecordRaw) {
    const { children } = nowRoute;
    menuRoutes.value = children;
    router.push(nowRoute);
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
                        :active="navActive"
                        :routes="navRoutes"
                        @wrap:route="handlerWrapRoute"
                    ></nav-main>
                </template>
            </head-main>
        </section>

        <section class="w100 ofh ATF-home-body">
            <body-main>
                <template #sider>
                    <menu-main :active="menuActive" :routes="toRaw(menuRoutes)"></menu-main>
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