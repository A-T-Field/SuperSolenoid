<!--
 * @Author: maggot-code
 * @Date: 2021-10-28 14:56:42
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-01 13:38:45
 * @Description: file content
-->
<script setup lang='ts'>
import { onMounted } from 'vue';
import { loadBarFail } from '@/utils/loading-bar';

onMounted(() => {
    loadBarFail();
});
</script>

<template>not-power</template>

<style scoped lang='scss'>
</style>