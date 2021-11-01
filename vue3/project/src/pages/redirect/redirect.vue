<!--
 * @Author: maggot-code
 * @Date: 2021-10-28 14:57:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-01 15:09:58
 * @Description: file content
-->
<script setup lang='ts'>
import { onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { isArray } from '@/utils/is-type';
import { loadBarEnd } from '@/utils/loading-bar';

const route = useRoute();
const router = useRouter();
const handlerBeforeMount = () => {
    loadBarEnd();

    const { params, query } = route;
    const { path: basepath } = params;
    const path = isArray(basepath) ? basepath.join('/') : basepath;

    router.push({ path, query });
};

onBeforeMount(handlerBeforeMount);
</script>

<template>redirect</template>

<style scoped lang='scss'>
</style>