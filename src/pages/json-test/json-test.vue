<!--
 * @Author: maggot-code
 * @Date: 2021-12-23 10:40:21
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-09 22:30:06
 * @Description: file content
-->
<script setup lang='ts'>
// import Schema from './schema1.json';
import Schema from './schema2.json';
import {
    FormProvider,
    createForm,
    compileSchema
} from '@/composables/use-form';

const form = createForm({
    schema: compileSchema(Schema)
});
window['$aa'] = form;
</script>

<template>
    <form-provider :form="form">321</form-provider>
</template>

<style scoped lang='scss'>
@import "./json-test.scss";
</style>