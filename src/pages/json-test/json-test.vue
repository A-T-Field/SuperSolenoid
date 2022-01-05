<!--
 * @Author: maggot-code
 * @Date: 2021-12-23 10:40:21
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-05 16:05:54
 * @Description: file content
-->
<script setup lang='ts'>
// import TestSchema from './test1.json';
import {
    createdForm
} from '@/composables/use-form';

const form = createdForm();
console.log(form);
</script>

<template>
    <!-- <form-provider :form="form" :schema="TestSchema"></form-provider> -->
    <h1>json test</h1>
</template>

<style scoped lang='scss'>
@import "./json-test.scss";
</style>