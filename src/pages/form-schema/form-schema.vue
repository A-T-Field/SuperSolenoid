<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 14:49:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-09 14:16:50
 * @Description: file content
-->
<script setup lang='ts'>
import { createForm } from '@/composables/use-data-form';
import { default as FormProvider } from '@/composables/use-data-form/component/FormProvider';
import { default as FormField } from '@/composables/use-data-form/component/FormField';
const form = createForm();
</script>

<template>
    <div class="form-schema">
        <form-provider :form="form">
            <form-field name="jiaran"></form-field>
        </form-provider>
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