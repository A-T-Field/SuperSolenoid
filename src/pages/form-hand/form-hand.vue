<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 14:48:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-05 17:11:45
 * @Description: file content
-->
<script setup lang='ts'>
import { NFormItem, NInput } from '@/plugins/naive-ui';
import {
    FormProvider,
    Field,
    connect,
    createForm
} from '@/composables/use-form';

const FormItem = connect(NFormItem);

const form = createForm();

</script>

<template>
    <div class="form-hand">
        <form-provider :form="form">
            <field
                name="name"
                title="姓名"
                :decorator="[FormItem]"
                :component="[NInput, { placeholder: '请填写姓名' }]"
            ></field>

            <field
                name="age"
                title="年龄"
                :decorator="[FormItem]"
                :component="[NInput, { placeholder: '请填写年龄' }]"
            ></field>
        </form-provider>
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