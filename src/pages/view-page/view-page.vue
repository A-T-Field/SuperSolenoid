<!--
 * @Author: maggot-code
 * @Date: 2021-11-16 17:59:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-17 10:29:29
 * @Description: file content
-->
<script setup lang='ts'>
import { useRouter, useRoute } from 'vue-router';
import { default as useReloadPage } from '@/router/router-reload-page';
const router = useRouter();
const route = useRoute();
</script>

<template>
    <h1>view page</h1>
    <n-button @click="useReloadPage(router, route)">刷新view page</n-button>
    <router-view></router-view>
</template>

<style scoped lang='scss'></style>