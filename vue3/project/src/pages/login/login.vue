<!--
 * @Author: maggot-code
 * @Date: 2021-10-19 15:57:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-01 15:49:48
 * @Description: file content
-->
<script setup lang='ts'>
import { useRouter } from 'vue-router';
const router = useRouter();
const handlerBack = () => {
    router.back();
};
</script>

<template>
    login
    <n-button @click="handlerBack">返回</n-button>
</template>

<style scoped lang='scss'>
</style>