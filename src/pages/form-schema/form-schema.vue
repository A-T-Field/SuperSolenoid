<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 14:49:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 00:53:32
 * @Description: file content
-->
<script setup lang='ts'>
import TESTJSON from '@/composables/use-data-form/json/tree.json';
import { useParser } from '@/composables/use-data-form';
import { Field } from '@/composables/use-data-form/model/Field';
// import { VoidField } from '@/composables/use-data-form/model/VoidField';
const schema = useParser(TESTJSON);
for (const key in schema) {
    const target = schema[key];
    if (target.isField) {
        new Field(target);
    }

    // if (target.isVoid) {
    //     new VoidField(target);
    // }
}
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