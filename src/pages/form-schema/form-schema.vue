<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 14:49:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-08 18:25:00
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
import { default as FormProvider } from '@/composables/use-data-form/component/FormProvider';
import { default as FormField } from '@/composables/use-data-form/component/FormField';
import { default as FormSchema } from '@/composables/use-data-form/component/FormSchema';
import { createForm } from '@/composables/use-data-form';
const form = createForm();
const aa = [
    {
        name: "jiaran"
    },
    {
        name: "ava"
    }
];
</script>

<template>
    <div class="form-schema">
        <!-- <form-provider :form="form">
            <form-field name="jiaran">123</form-field>
        </form-provider>-->
        <!-- <n-button @click="handlerAdd">增加一个</n-button>
        <n-button @click="handlerEdit">修改数值</n-button>-->
        <form-schema :schema="aa"></form-schema>
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