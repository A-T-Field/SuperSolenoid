<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 14:49:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-12 23:19:27
 * @Description: file content
-->
<script setup lang='ts'>
import { createForm } from '@/composables/use-form';
import { NInput } from 'naive-ui';
// import FormProvider from '@/composables/use-form/component/FormProvider';
import FormField from '@/composables/use-form/component/FormField';
import FormVessel from '@/composables/use-form/component/FormVessel';

const form = createForm();
const schema = [
    {
        name: "jiaran",
        value: "jjjj",
        component: [NInput, {
            label: "123",
            rule: [
                {
                    required: true,
                    message: '正面回答',
                    trigger: ['input', 'blur']
                }
            ]
        }]
    }
];
</script>

<template>
    <div class="form-schema">
        <form-vessel :form="form" :schema="schema">
            <form-field name="ava"></form-field>
        </form-vessel>
        <!-- <form-provider :form="form">
            <form-field
                name="jiaran"
                label="为什么关注嘉然111"
                value="aaaa"
                :component="[NInput, {
                    rule: [
                        {
                            required: true,
                            message: '正面回答',
                            trigger: ['input', 'blur']
                        }
                    ]
                }]"
            ></form-field>
        </form-provider>-->
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