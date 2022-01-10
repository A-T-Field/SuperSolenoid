<!--
 * @Author: maggot-code
 * @Date: 2021-12-23 10:40:21
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-10 14:25:08
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
</script>

<template>
    <form-provider :form="form"></form-provider>
</template>

<style scoped lang='scss'>
@import "./json-test.scss";
</style>