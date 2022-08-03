<!--
 * @Author: maggot-code
 * @Date: 2021-11-11 17:39:42
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-12 09:27:18
 * @Description: file content
-->
<script setup lang='ts'>
import { useMessage } from 'naive-ui';

window['$message'] = useMessage();
</script>

<template>
    <slot></slot>
</template>

<style scoped lang='scss'></style>