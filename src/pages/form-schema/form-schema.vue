<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 14:49:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-09 13:24:27
 * @Description: file content
-->
<script setup lang='ts'>
// const {
//     getFormProps,
//     getComponent,
//     setStruct
// } = useForm({
//     loading: false,
//     display: "modify",
//     props: {
//         inline: false,
//         labelWidth: 240,
//         labelAlign: "left",
//         labelPlacement: "left",
//         showFeedback: true,
//         showLabel: true,
//         showRequireMark: true,
//         requireMarkPlacement: "right",
//         size: "large"
//     },
//     schema: {
//         diana: {
//             key: "diana",
//             value: "",
//             defaultValue: "",
//             label: "为什么关注嘉然",
//         },
//         ava: {
//             key: "ava",
//             value: "",
//             defaultValue: "",
//             label: "为什么关注向晚"
//         }
//     }
// });
import { createForm } from '@/composables/use-data-form';
import { default as FormProvider } from '@/composables/use-data-form/component/FormProvider';
import { NInput, NSelect } from 'naive-ui';
const form = createForm();
const schema = [
    {
        name: "jiaran",
        value: "111aa",
        label: "为什么关注嘉然",
        component: [NInput, {
            placeholder: "为什么关注嘉然"
        }]
    },
    {
        name: 'ava',
        value: "02",
        label: "为什么关注向晚",
        component: [NSelect, {
            placeholder: "为什么关注向晚",
            options: [
                {
                    label: "她是我爹!",
                    value: '01'
                },
                {
                    label: "就是喜欢",
                    value: "02"
                }
            ]
        }]
    }
];
</script>

<template>
    <div class="form-schema">
        <form-provider :form="form" :schema="schema"></form-provider>
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