<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 14:49:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 10:46:27
 * @Description: file content
-->
<script setup lang='ts'>
// import TESTJSON from '@/composables/use-data-form/json/tree.json';
import TESTJSON from '@/composables/use-data-form/json/tree2.json';
import { useParser } from '@/composables/use-data-form';
const schema = useParser(TESTJSON);
console.log(schema);
</script>

<template>
    <div class="form-schema">form schema</div>
</template>

<style scoped lang='scss'>
.form-schema {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
}
</style>