<!--
 * @Author: maggot-code
 * @Date: 2021-12-23 10:40:21
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-06 17:35:51
 * @Description: file content
-->
<script setup lang='ts'>
// import Schema from './schema1.json';
import Schema from './schema2.json';
import { createForm, compileSchema } from '@/composables/use-form';

const form = createForm({
    schema: compileSchema(Schema)
});
console.log(form);
</script>

<template>
    <h1>json test</h1>
</template>

<style scoped lang='scss'>
@import "./json-test.scss";
</style>