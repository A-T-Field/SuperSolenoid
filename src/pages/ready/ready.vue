<!--
 * @Author: maggot-code
 * @Date: 2021-11-10 14:53:58
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-14 18:42:28
 * @Description: file content
-->
<script setup lang='ts'>
import { checkUser } from '@/api/common.api';

checkUser().then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
})
</script>

<template>
    <h1>ready : 11</h1>
</template>

<style scoped lang='scss'></style>