<!--
 * @Author: maggot-code
 * @Date: 2021-10-28 17:19:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-01 17:22:16
 * @Description: file content
-->
<script setup lang='ts'>
import { useRoute, useRouter } from 'vue-router';
import { UsePageReload } from '@/composables/UsePageRouter';

const router = useRouter();
const route = useRoute();

const handlerPageReload = () => UsePageReload(router, route);
</script>

<template>
    home
    <n-button @click="handlerPageReload">刷新页面</n-button>
</template>

<style scoped lang='scss'>
</style>