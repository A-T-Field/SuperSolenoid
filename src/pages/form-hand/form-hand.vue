<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 14:48:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-13 23:50:05
 * @Description: file content
-->
<script setup lang='ts'>
import Test1JSON from '@/composables/use-form/json/test1.json';
// import { Form } from '@/composables/use-form/model/Form';
// import { Field } from '@/composables/use-form/model/Field';
import { Schema } from '@/composables/use-form/model/Schema';
const schema = new Schema(Test1JSON);
console.log(schema);
</script>

<template>
    <div class="form-hand">123</div>
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