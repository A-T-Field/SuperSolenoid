<!--
 * @Author: maggot-code
 * @Date: 2021-11-10 14:53:58
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-12 18:28:46
 * @Description: file content
-->
<script setup lang='ts'>
import type { ReadyStatus, ReadyStatusController } from '@/enums/ready.enum';

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useLocalCached } from '$/utils/cached';
import { PagesEnum } from '@/enums/pages.enum';
import { default as useSystemReady } from '@/composables/use-system-ready';

const { VITE_APP_POWER_KEY } = import.meta.env;

const router = useRouter();

const localCached = useLocalCached();

const controller: ReadyStatusController = {
    checkPower() {
        const status = localCached.has(VITE_APP_POWER_KEY) ? 'hasPower' : 'notHasPower';
        return new Promise((resolve) => resolve(status));
    },
    hasPower() {
        return new Promise((resolve) => resolve('checkPower'));
    },
    notHasPower() {
        router.replace({ name: PagesEnum.BASE_LOGIN_NAME });
        return new Promise((_, reject) => reject('抱歉!没有找到身份证明'));
    },
    checkPowerUse() {
        // 发送请求校验身份是否可用
        return new Promise((resolve) => {
            // .then()
            // const {code} = response.data;
            // return resolve(code<=0?'usePower':'notUsePower');

            // .catch()
            return resolve('checkPowerUseFail');
        });
    },
    usePower() {
        return new Promise((resolve) => resolve('checkPowerUpdate'));
    },
    notUsePower() {
        router.replace({ name: PagesEnum.BASE_LOGIN_NAME });
        return new Promise((_, reject) => reject('该身份目前无法使用!'));
    },
    checkPowerUseFail() {
        router.replace({ name: PagesEnum.ERROR_CRASH_NAME });
        return new Promise((_, reject) => reject('身份校验异常!'));
    },
    checkPowerUpdate() {
        // 发送请求校验身份是否需要更新
        return new Promise((resolve) => {
            // .then()
            // const {code} = response.data;
            // return resolve(code<=0?'usePower':'notUsePower');

            // .catch()
            return resolve('checkPowerUpdateFail');
        });
    },
    needPower() {
        return new Promise((resolve) => resolve('updatePower'));
    },
    notNeedPower() {
        // 不需要更新身份跳转登录首页
        console.log('进入系统');
        return new Promise((resolve) => resolve(undefined));
    },
    checkPowerUpdateFail() {
        router.replace({ name: PagesEnum.ERROR_CRASH_NAME });
        return new Promise((_, reject) => reject('校验异常!'));
    },
    updatePower() {
        // 发送请求更新身份
        return new Promise((resolve) => {
            // .then()
            // const {code} = response.data;
            // return resolve(code<=0?'usePower':'notUsePower');

            // .catch()
            return resolve('updatePowerFail');
        });
    },
    updatePowerSuccess() {
        // 转换状态到不需要更新身份
        return new Promise((resolve) => resolve('notNeedPower'));
    },
    updatePowerError() {
        router.replace({ name: PagesEnum.BASE_LOGIN_NAME });
        return new Promise((_, reject) => reject('身份更新失败!'));
    },
    updatePowerFail() {
        router.replace({ name: PagesEnum.ERROR_CRASH_NAME });
        return new Promise((_, reject) => reject('更新异常!'));
    }
}

const {
    readyStatus
} = useSystemReady<ReadyStatus, ReadyStatusController>(ref('checkPower'), controller);
</script>

<template>
    <h1>ready : {{ readyStatus }}</h1>
</template>

<style scoped lang='scss'></style>