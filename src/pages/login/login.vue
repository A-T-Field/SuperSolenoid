<!--
 * @Author: maggot-code
 * @Date: 2021-11-10 14:28:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-10 16:11:41
 * @Description: file content
-->
<script setup lang='ts'>
import { useRouter, useRoute } from 'vue-router';
import { default as UseReloadPage } from '$/router/router-reload-page';
const router = useRouter();
const route = useRoute();
</script>

<template>
    login
    <n-button @click="UseReloadPage(router, route)">刷新页面</n-button>
</template>

<style scoped lang='scss'></style>