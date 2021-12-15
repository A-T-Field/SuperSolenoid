<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 14:48:59
 * @LastEditors: maggot-code
<<<<<<< HEAD
<<<<<<< HEAD
 * @LastEditTime: 2021-12-15 22:40:31
 * @Description: file content
-->
<script setup lang='ts'>
=======
 * @LastEditTime: 2021-12-14 18:31:18
 * @Description: file content
-->
<script setup lang='ts'>
=======
 * @LastEditTime: 2021-12-14 18:31:18
 * @Description: file content
-->
<script setup lang='ts'>
>>>>>>> parent of 9b41bf6 (#)
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
<<<<<<< HEAD
>>>>>>> parent of 9b41bf6 (#)
=======
>>>>>>> parent of 9b41bf6 (#)
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