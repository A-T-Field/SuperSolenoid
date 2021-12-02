<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 14:49:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-02 18:32:48
 * @Description: file content
-->
<script setup lang='ts'>
import { ref } from 'vue';

import { default as useForm } from '@/composables/use-form';

const {
    getFormSchema,
    formRef,
    formBind,
    setFormSchema,
    setFormSchemata
} = useForm({
    schema: {
        field: "jiaran",
        defaultValue: "嘉然",
        mode: "input",
        vessel: {
            label: "为什么关注嘉然",
            labelWidth: 200,
            labelPlacement: "left",
            labelAlign: "left",
            prefix: "AAA",
            suffix: "BBB",
            tips: "就是问问",
            describe: "看看成分",
        }
    }
});

const handlerClick = () => {
    setFormSchema({
        field: "ava",
        vessel: {
            label: "为什么关注向晚",
        }
    });

    setTimeout(() => {
        setFormSchemata([
            {
                field: "nailin",
                vessel: {
                    label: "为什么关注乃琳?"
                }
            },
            {
                field: "beila",
                vessel: {
                    label: "为什么关注贝拉?"
                }
            }
        ]);
    }, 2000);
};

const formValue = ref({
    phone: ''
})

const rules = {
    phone: {
        required: true,
        message: '请输入电话号码',
        trigger: ['blur', 'input']
    }
}
</script>

<template>
    <div class="form-schema">
        <n-form ref="formRef" v-bind="formBind" :model="formValue" :rules="rules">
            <n-form-item label="电话号码" path="phone">
                <n-input placeholder="电话号码" v-model:value="formValue.phone" />
                <!-- <p>{{ formValue.phone }}</p> -->
            </n-form-item>

            <n-button @click="handlerClick">校验</n-button>
        </n-form>
        {{ getFormSchema }}
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