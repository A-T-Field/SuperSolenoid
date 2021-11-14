<!--
 * @Author: maggot-code
 * @Date: 2021-11-10 16:51:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-12 18:37:13
 * @Description: file content
-->
<script setup lang='ts'>
import { useRouter } from 'vue-router';
import { login } from '@/api/common.api';
import { setLoading } from '$/utils/business';
import { messageSuccess } from '$/utils/tips';
import { useLocalCached } from '$/utils/cached';
import { PagesEnum } from '@/enums/pages.enum';
import { default as useLogin } from '@/composables/use-login';
import { default as useFormTips } from '@/composables/use-form-tips';
import { default as useApiTips } from '@/composables/use-api-tips';

const { VITE_APP_POWER_KEY } = import.meta.env;

const router = useRouter();
const localCached = useLocalCached();

const {
    formRefs,
    formLoading,
    formBody,
    formRules,
    handlerFormRules
} = useLogin();

const requestLogin = () => login(formBody);

const successLogin = (response: any) => {
    messageSuccess('登录成功!')

    const { context } = response.data;
    const { token } = context;

    localCached.set(VITE_APP_POWER_KEY, token);

    router.push({ name: PagesEnum.BASE_ROOT_NAME });
}

const handlerForm = (event: EventFn): void => {
    event.preventDefault();

    handlerFormRules()
        .then(requestLogin)
        .then(useApiTips)
        .then(successLogin)
        .catch(useFormTips)
        .finally(setLoading(formLoading));
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
        @keydown.enter="handlerForm"
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