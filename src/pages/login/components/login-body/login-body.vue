<!--
 * @Author: maggot-code
 * @Date: 2021-11-10 16:51:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-10 17:32:49
 * @Description: file content
-->
<script setup lang='ts'>
import { default as UseLogin } from '$/biz/use-login';

function handlerForm(error: any) {
    console.log(error);
    console.log('111');
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
        @click="handlerFormRules"
    >登录</n-button>
</template>

<style scoped lang='scss'></style>