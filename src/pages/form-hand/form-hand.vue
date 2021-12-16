<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 14:48:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-16 15:57:01
 * @Description: file content
-->
<script setup lang='ts'>
import TestJSON1 from '@/composables/use-form/json/test.json';

import { useParser, useForm } from '@/composables/use-form';
const schema = useParser(TestJSON1);
const form = useForm({ schema });
console.log(form);
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