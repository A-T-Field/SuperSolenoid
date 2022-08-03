<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 14:49:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-13 16:22:52
 * @Description: file content
-->
<script setup lang='ts'>
import { createForm } from '@/composables/use-form';
// import FormProvider from '@/composables/use-form/component/FormProvider';
// import FormField from '@/composables/use-form/component/FormField';
import FormVessel from '@/composables/use-form/component/FormVessel';

const form = createForm();
const schema = [
    {
        name: "inputtest",
        mode: "NInput",
        label: "测试输入框",
        tips: "提示测试",
        rule: [
            {
                required: true,
                message: '侧是是是',
                trigger: ['input', 'blur']
            }
        ],
        componentProps: {
            clearable: true,
            placeholder: "测试试试"
        }
    },
    {
        name: "textinput",
        mode: "NInput",
        label: "测试文本框",
        componentProps: {
            placeholder: "内容内容占位的",
            rows: 5,
            showCount: true,
            type: "textarea"
        }
    },
    {
        name: "testselect",
        mode: "NSelect",
        label: "测试下拉框",
        componentProps: {
            multiple: true,
            options: [
                {
                    label: "选项1",
                    value: 10
                },
                {
                    label: "选项2",
                    value: 11
                },
                {
                    label: "选项3",
                    value: 12
                }
            ]
        }
    },
    {
        name: "testnumber",
        mode: "NInputNumber",
        label: "数字输入框",
        componentProps: {
            clearable: true,
            max: 12,
            min: 3,
            step: 0.5
        }
    }
]

const handlerCheck = () => {
    form.onCheck()
        .catch(error => {
            console.log(error);
        })
}

const handlerSubmit = () => {
    const a = form.onSubmit();
    console.log(a);
}
</script>

<template>
    <div class="form-schema">
        <form-vessel :form="form" :schema="schema"></form-vessel>
        <div>
            <n-button @click="handlerCheck">校验</n-button>
            <n-button @click="handlerSubmit">保存</n-button>
        </div>
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