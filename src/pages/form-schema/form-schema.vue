<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 14:49:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-07 23:12:05
 * @Description: file content
-->
<script setup lang='ts'>
import { ref } from 'vue';
import {
    useForm
} from '@/composables/use-data-form';

const {
    formValues,
    createField,
    setValuesIn
} = useForm();

const a = createField({
    key: "jiaran",
    value: "111"
});

console.log(a);


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
let aa = ref(0);
const handlerAdd = () => {
    createField({
        key: "ava",
        value: "222"
    })
    aa.value++;
    setValuesIn("jiaran", aa.value);
};
</script>

<template>
    <div class="form-schema">
        {{ formValues }}
        <n-button @click="handlerAdd">增加</n-button>
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