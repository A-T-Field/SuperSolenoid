<!--
 * @Author: maggot-code
 * @Date: 2021-10-29 18:05:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-10-29 18:18:00
 * @Description: file content
-->
<script setup lang='ts'>
import { default as LoadBar } from '@/components/load-bar';
</script>

<template>
    <n-loading-bar-provider>
        <load-bar></load-bar>
    </n-loading-bar-provider>
</template>

<style scoped lang='scss'>
</style>