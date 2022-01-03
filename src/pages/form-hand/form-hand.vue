<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 14:48:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-31 10:01:18
 * @Description: file content
-->
<script setup lang='ts'>
import { ref, computed } from 'vue';
import { shallowCompile } from '@/composables/use-form';

const selectField = {
    name: "select",
    value: ref('visable'),
    display: true,
    enum: [
        { label: "显示", value: 'visable' },
        { label: "隐藏", value: 'hidden' }
    ]
};
const handlerUpdateValue = (val: string) => {
    selectField.value.value = val;
}

const inputField = {
    name: "input",
    value: ref(""),
    // display: computed(() => {
    //     return unref(selectField.value) === "visable";
    // })
    display: computed(() => {
        return shallowCompile(`{{ form.select.value.value === 'visable' }}`, { form })
    })
}
const handlerInputValue = (val: string) => {
    inputField.value.value = val;
}

const form = {
    select: selectField,
    input: inputField
};
</script>

<template>
    <div class="form-hand">
        <div>
            <n-input
                :value="form.input.value.value"
                v-show="form.input.display.value"
                @input="handlerInputValue"
            ></n-input>

            <n-select
                :value="form.select.value.value"
                v-show="form.select.display"
                :options="form.select.enum"
                @update:value="handlerUpdateValue"
            ></n-select>
        </div>
        <h1>form hand</h1>
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