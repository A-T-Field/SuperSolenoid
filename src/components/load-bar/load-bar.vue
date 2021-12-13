<!--
 * @Author: maggot-code
 * @Date: 2021-10-29 18:13:49
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-01 11:30:39
 * @Description: file content
-->
<script setup lang='ts'>
import { useLoadingBar } from 'naive-ui';

const loadBar = useLoadingBar();

window['$loadBarStart'] = loadBar.start;
window['$loadBarEnd'] = loadBar.finish;
window['$loadBarFail'] = loadBar.error;
</script>

<template>
    <slot></slot>
</template>

<style scoped lang='scss'>
</style>