<!--
 * @Author: maggot-code
 * @Date: 2022-01-12 09:42:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-13 14:00:12
 * @Description: file content
-->
<script setup lang='ts'>
// import {} from '@/composables/use-form';
import { parse } from '@babel/parser';
const stringCodeSync = `$self.hidden = $deps[0].value.length > 3`;
// const stringCodeAsync = `$self.dataSource = $request("/atf/get","GET",$deps[0].value).data.context`;

const File = parse(stringCodeSync);
console.log(File)
</script>

<template>
    <h1>string to code</h1>
</template>

<style scoped lang='scss'></style>