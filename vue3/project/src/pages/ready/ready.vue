<!--
 * @Author: maggot-code
 * @Date: 2021-10-29 15:43:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-01 15:15:13
 * @Description: file content
-->
<script setup lang='ts'>
import { inject } from 'vue';
const usePageReload = inject('handlerPageReload');
</script>

<template>
    <div class="system-ready">
        ready
        <n-button @click="usePageReload">刷新页面</n-button>
    </div>
</template>

<style scoped lang='scss'>
@import "./style/index.scss";
</style>