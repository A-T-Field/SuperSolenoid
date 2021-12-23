<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 14:49:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-23 10:09:53
 * @Description: file content
-->
<script setup lang='ts'>
import { ref, watchEffect } from 'vue';
// import TESTJSON from '@/composables/use-data-form/json/tree.json';
// import TESTJSON from '@/composables/use-data-form/json/tree2.json';
// import TESTJSON3 from '@/composables/use-data-form/json/tree3.json';
import TESTJSON4 from '@/composables/use-data-form/json/tree4.json';
import {
    FormProvider,
    useParser,
    createForm
} from '@/composables/use-data-form';
const schema = useParser(TESTJSON4);
const form = createForm();
form.setupSchema(schema);

const value = ref("");
const value11 = ref("");

const handlerInput = (val) => {
    value.value = val;
}

watchEffect(() => {
    value11.value = value.value
})
</script>

<template>
    <div class="form-schema">
        <form-provider :form="form"></form-provider>

        <n-input :value="value" @input="handlerInput"></n-input>

        <n-input :value="value11"></n-input>
    </div>
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