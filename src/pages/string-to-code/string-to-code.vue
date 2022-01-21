<!--
 * @Author: maggot-code
 * @Date: 2022-01-12 09:42:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-14 16:32:40
 * @Description: file content
-->
<script setup lang='ts'>
import { Parser } from '@/composables/use-form';
// const stringCode = `$self.hidden=$deps[0].value.length>3`;
// const stringCode = `$self.dataSource = $request("/get/select","GET",[$deps[0],$deps[1]]).data.context`;
// const stringCode = `$self.hidden = $deps[0].value.length > 3`;
// const stringCode = `layout.name.cc`;
const stringCode = `"abs"`;
const p = new Parser(stringCode);
console.log(p);
</script>

<template>
    <h1>string to code</h1>
</template>

<style scoped lang='scss'></style>