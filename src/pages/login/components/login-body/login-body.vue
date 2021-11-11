<!--
 * @Author: maggot-code
 * @Date: 2021-11-10 16:51:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-11 15:15:39
 * @Description: file content
-->
<script setup lang='ts'>
import type { Ref } from 'vue';

import { login } from '@/api/common.api';
import { default as UseLogin } from '$/biz/use-login';

function handlerForm(params: any, error: any, loading: Ref<boolean>) {
    if (error.length > 0) {
        console.log(error);
        return;
    }

    login(params).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    }).finally(() => loading.value = false)
}

const {
    formRefs,
    formLoading,
    formBody,
    formRules,
    handlerFormRules
} = UseLogin({
    handlerForm
});
</script>

<template>
    <n-form
        ref="formRefs"
        size="medium"
        :model="formBody"
        :rules="formRules"
        :disabled="formLoading"
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
    <n-button
        type="info"
        size="large"
        :block="true"
        :loading="formLoading"
        :disabled="formLoading"
        @click="handlerFormRules"
    >登录</n-button>
</template>

<style scoped lang='scss'></style>