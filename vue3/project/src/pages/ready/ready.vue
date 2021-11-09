<!--
 * @Author: maggot-code
 * @Date: 2021-10-29 15:43:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-09 13:55:24
 * @Description: file content
-->
<script setup lang='ts'>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { default as useSystemReady } from '@/hooks/use-system-ready';

const handlerMounted = () => {
    useSystemReady(useRouter()).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });
};

onMounted(handlerMounted);

// import { default as UseRouterInstall } from '@/router/router-install';
// import MockRoute from '@/assets/json/power-route-test.json';
// UseRouterInstall(MockRoute);
</script>

<template>
    <div class="system-ready">ready</div>
</template>

<style scoped lang='scss'>
@import "./style/index.scss";
</style>