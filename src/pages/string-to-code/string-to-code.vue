<!--
 * @Author: maggot-code
 * @Date: 2022-01-12 09:42:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-12 17:31:07
 * @Description: file content
-->
<script setup lang='ts'>
import { Tokenizer } from '@/composables/use-form';
const stringCodeSync = ` {{ $self.hidden = $deps[0].value.length > 3 }}`;
// const stringCodeAsync = `{{ $self.dataSource = @request("/atf/get","GET",$deps[0].value).data.context }}`;

const tr = new Tokenizer(stringCodeSync);
console.log(tr);
</script>

<template>
    <h1>string to code</h1>
</template>

<style scoped lang='scss'></style>