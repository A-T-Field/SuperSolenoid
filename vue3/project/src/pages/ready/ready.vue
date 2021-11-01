<!--
 * @Author: maggot-code
 * @Date: 2021-10-29 15:43:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-01 17:45:06
 * @Description: file content
-->
<script setup lang='ts'>
import { default as useSystemReady } from './hooks/use-system-ready';
useSystemReady();
</script>

<template>
    <div class="system-ready">ready</div>
</template>

<style scoped lang='scss'>
@import "./style/index.scss";
</style>