<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 14:49:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-23 15:21:52
 * @Description: file content
-->
<script setup lang='ts'>
import { watchEffect } from 'vue';
import { getCityList } from '@/api/common.api';
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
const shengField = form.getField("sheng");
const cityField = form.getField("city");

watchEffect(() => {
    getCityList(shengField.value as string).then(response => {
        console.log(response);
        cityField.dataSource = response.data.context;
    })
})
</script>

<template>
    <div class="form-schema">
        <form-provider :form="form"></form-provider>
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