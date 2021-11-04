<!--
 * @Author: maggot-code
 * @Date: 2021-10-28 17:19:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-04 16:38:13
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

    <div>
        <router-link to="/home/home1">跳转到home1</router-link>
    </div>

    <div>
        <router-view></router-view>
    </div>
</template>

<style scoped lang='scss'>
</style>