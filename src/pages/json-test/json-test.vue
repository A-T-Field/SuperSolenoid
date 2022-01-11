<!--
 * @Author: maggot-code
 * @Date: 2021-12-23 10:40:21
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-11 18:25:22
 * @Description: file content
-->
<script setup lang='ts'>
// import Schema from './schema1.json';
import Schema from './schema2.json';
// import Schema from './schema3.json';

import { atfApi } from '@/api/request';
import {
    FormProvider,
    createForm,
    compileSchema
} from '@/composables/use-form';

const form = createForm({
    schema: compileSchema(Schema),
    requestSend: atfApi.send
});
</script>

<template>
    <form-provider :form="form"></form-provider>
</template>

<style scoped lang='scss'>
@import "./json-test.scss";
</style>