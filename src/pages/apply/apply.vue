<!--
 * @Author: maggot-code
 * @Date: 2021-11-16 18:01:10
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-18 15:26:10
 * @Description: file content
-->
<script setup lang='ts'>
import { useRouter, useRoute } from 'vue-router';
import { default as useReloadPage } from '@/router/router-reload-page';
const router = useRouter();
const route = useRoute();
</script>

<template>
    worker apply
    <n-button @click="useReloadPage(router, route)">刷新 apply</n-button>
    <router-view></router-view>
</template>

<style scoped lang='scss'></style>