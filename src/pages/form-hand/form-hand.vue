<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 14:48:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-14 18:31:18
 * @Description: file content
-->
<script setup lang='ts'>
import { unref, watch } from 'vue';
import Test1JSON from '@/composables/use-form/json/test1.json';
import {
    FormProvider,
    schemaParser,
    createForm
} from '@/composables/use-form';
const schema = schemaParser(Test1JSON);
const form = createForm({
    schema
});

watch(
    () => unref(form.getValues()),
    (a) => {
        console.log(a);
    }
)
</script>

<template>
    <div class="form-hand">
        <form-provider :form="form"></form-provider>
    </div>
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