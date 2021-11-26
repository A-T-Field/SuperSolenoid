<!--
 * @Author: maggot-code
 * @Date: 2021-10-14 15:36:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-26 15:51:17
 * @Description: file content
-->
<script setup lang="ts">
import { zhCN, dateZhCN } from '@/plugins/naive-ui';
</script>

<template>
    <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
        <router-view></router-view>
    </n-config-provider>
</template>

<style lang="scss">
@import "@/style/app.scss";
@import "@/style/transition.scss";
</style>
