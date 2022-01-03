<!--
 * @Author: maggot-code
 * @Date: 2021-12-23 10:40:21
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-03 23:08:38
 * @Description: file content
-->
<script setup lang='ts'>
import { Form } from '@/composables/use-form';
const form = new Form();
form.createField({});
console.log(form);
</script>

<template>
    <div></div>
</template>

<style scoped lang='scss'>
@import "./json-test.scss";
</style>