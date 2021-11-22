<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 09:47:24
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-22 10:27:32
 * @Description: file content
-->
<script setup lang='ts'>
import { useRouter, useRoute } from 'vue-router';
import { default as useReloadPage } from '@/router/router-reload-page';

const router = useRouter();
const route = useRoute();

function handlerReloadPage() {
    useReloadPage(router, route);
}
</script>

<template>
    <n-button @click="handlerReloadPage">刷新页面</n-button>
    <slot name="crumb"></slot>
</template>

<style scoped lang='scss'></style>