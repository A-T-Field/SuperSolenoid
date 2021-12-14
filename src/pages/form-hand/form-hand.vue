<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 14:48:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-14 14:59:23
 * @Description: file content
-->
<script setup lang='ts'>
import Test1JSON from '@/composables/use-form/json/test1.json';
import { schemaParser, createForm } from '@/composables/use-form';
const schema = schemaParser(Test1JSON);
createForm({
    schema
});
</script>

<template>
    <div class="form-hand"></div>
</template>

<style scoped lang='scss'>
.form-hand {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
}
</style>