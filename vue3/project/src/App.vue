<!--
 * @Author: maggot-code
 * @Date: 2021-10-14 15:36:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-01 15:16:38
 * @Description: file content
-->
<script setup lang="ts">
import { provide, unref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { PagesEnum } from '@/enums/pages-enum';

const route = useRoute();
const router = useRouter();

// 处理页面重新装载
const handlerPageReload = () => {
    const { fullPath: path, query } = unref(route);

    router.push({
        name: PagesEnum.REDIRECT_NAME,
        params: { path },
        query
    });
};
provide('handlerPageReload', handlerPageReload);
</script>

<template>
    <router-view></router-view>
</template>

<style lang="scss">
@import url("@/style/app.scss");
</style>
