<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 14:48:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-09 18:49:04
 * @Description: file content
-->
<script setup lang='ts'>
// import { createForm } from '@/composables/use-data-form';
// import FormProvider from '@/composables/use-data-form/component/FormProvider';
// import FormField from '@/composables/use-data-form/component/FormField';

import FormVessel from '@/composables/use-data-form/component/FormVessel';

import { NInput } from 'naive-ui';

// const form = createForm();

const data = [
    {
        name: "jiaran",
        mode: "input",
        component: [NInput]
    },
    {
        name: "jiaran2",
        mode: "input",
        component: [NInput]
    },
    {
        name: "jiaran1",
        mode: "input",
        component: [NInput]
    }
];
</script>

<template>
    <div class="form-hand">
        <!-- <form-provider :form="form">
            <form-field name="jiaran" mode="input"></form-field>
            <form-field name="ava" mode="input"></form-field>
        </form-provider>-->
        <form-vessel :schema="data"></form-vessel>
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