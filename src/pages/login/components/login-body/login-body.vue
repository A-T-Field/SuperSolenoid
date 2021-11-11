<!--
 * @Author: maggot-code
 * @Date: 2021-11-10 16:51:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-11 16:30:16
 * @Description: file content
-->
<script setup lang='ts'>
import { login } from '@/api/common.api';
import { setLoading } from '$/utils/business';
import { default as UseLogin } from '$/biz/use-login';

const {
    formRefs,
    formLoading,
    formBody,
    formRules,
    handlerFormRules
} = UseLogin();

const handlerLogin = () => {
    login(formBody).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    }).finally(setLoading(formLoading))
}

const handlerForm = (event: EventFn): void => {
    event.preventDefault();

    handlerFormRules().then(handlerLogin).catch(error => {
        console.log(error);
    })
}
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
        @click="handlerForm"
    >登录</n-button>
</template>

<style scoped lang='scss'></style>