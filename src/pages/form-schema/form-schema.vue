<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 14:49:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-19 21:03:23
 * @Description: file content
-->
<script setup lang='ts'>
// import TESTJSON from '@/composables/use-data-form/json/tree.json';
// import TESTJSON from '@/composables/use-data-form/json/tree2.json';
import TESTJSON3 from '@/composables/use-data-form/json/tree3.json';
import {
    FormProvider,
    useParser,
    createForm
} from '@/composables/use-data-form';
const schema = useParser(TESTJSON3);
const form = createForm();
form.setupSchema(schema);
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