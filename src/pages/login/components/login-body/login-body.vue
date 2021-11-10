<!--
 * @Author: maggot-code
 * @Date: 2021-11-09 09:38:05
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-09 15:21:28
 * @Description: file content
-->
<script setup lang='ts'>
import type { FormInst } from 'naive-ui';
import { ref, reactive } from 'vue';
// import { isNull } from '@/utils/is-type';

const formRefs = ref<FormInst | null>(null);
const formLoading = ref(false);
const formBody = reactive({
    username: "",
    password: ""
});
const formRules = {
    username: {
        required: true,
        message: "请输入用户名",
        trigger: 'blur'
    },
    password: {
        required: true,
        message: "请输入密码",
        trigger: 'blur'
    }
};
const handlerFormRules = (event) => {
    event.preventDefault();
    formLoading.value = true;

    formRefs.value?.validate(error => {
        if (error) {
            console.log(error);
            return;
        }

        console.log('success');
    })
};
</script>

<template>
    <n-form
        ref="formRefs"
        size="medium"
        :model="formBody"
        :rules="formRules"
        :show-require-mark="true"
        :show-label="false"
    >
        <n-form-item label="用户名" path="username">
            <n-input placeholder="请输入用户名" v-model:value="formBody.username" :clearable="true">
                <template #prefix>用户名：</template>
            </n-input>
        </n-form-item>
        <n-form-item label="密码" path="password">
            <n-input
                type="password"
                placeholder="请输入密码"
                show-password-on="click"
                v-model:value="formBody.password"
                :clearable="true"
            >
                <template #prefix>密码：</template>
            </n-input>
        </n-form-item>
    </n-form>
    <n-button type="info" size="large" :loading="formLoading" @click="handlerFormRules">登录</n-button>
</template>

<style scoped lang='scss'></style>