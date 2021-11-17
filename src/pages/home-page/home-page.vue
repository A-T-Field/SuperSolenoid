<!--
 * @Author: maggot-code
 * @Date: 2021-11-17 11:18:39
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-17 18:57:53
 * @Description: file content
-->
<script setup lang='ts'>
import type { RouteRecordName, RouteRecordRaw } from 'vue-router';

import { default as LayoutRouterView } from '@/layout/layout-router-view';
import { default as HeadMain } from '@/components/head-main';
import { default as BodyMain } from '@/components/body-main';
import { default as NavMain } from '@/components/nav-main';
import { default as MenuMain } from '@/components/menu-main';

import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const routes = router.getRoutes();

const manuRoutes = ref<Array<RouteRecordRaw>>([]);
const navName = ref<RouteRecordName>('');

function handlerNavActive(routes: Array<RouteRecordRaw>) {
    manuRoutes.value = routes;
}
function handlerNavName(name: RouteRecordName) {
    navName.value = name;
}
</script>

<template>
    <main class="w100 h100 ofh ATF-home">
        <section class="w100 ofh ATF-home-head">
            <head-main>
                <template #nav>
                    <nav-main
                        :routes="routes"
                        @on-nav-name="handlerNavName"
                        @on-nav-routes="handlerNavActive"
                    ></nav-main>
                </template>
            </head-main>
        </section>

        <section class="w100 ofh ATF-home-body">
            <body-main>
                <template #sider>
                    <menu-main :key="navName" :routes="manuRoutes" :defActive="manuRoutes[0].name"></menu-main>
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