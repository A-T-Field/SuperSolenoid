<!--
 * @Author: maggot-code
 * @Date: 2022-01-12 09:42:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-13 16:48:29
 * @Description: file content
-->
<script setup lang='ts'>
import { Tokenizer } from '@/composables/use-form';
// const stringCode = `$self.hidden=$deps[0].value.length>3`;
const stringCode = `$self.dataSource = @request("/get/select",'GET',[$deps[0],$deps[1]]).data.context`;
const tk = new Tokenizer(stringCode);
console.log(tk);
</script>

<template>
    <h1>string to code</h1>
</template>

<style scoped lang='scss'></style>