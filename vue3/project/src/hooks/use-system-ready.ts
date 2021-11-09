/*
* @Author: maggot-code
* @Date: 2021-11-01 17:20:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-09 14:28:06
* @Description: file content
*/
import { ref, watch } from "vue";

import { isFunction, isNil } from '@/utils/is-type';
import { useLocalCached } from '@/utils/cached';

import { ReadyStatusEnum } from "@/enums/ready-enum";
import { PagesEnum } from "@/enums/pages-enum";

import type { Router } from "vue-router";
import type { WatchReadyContext, UseReadyStatus } from '/#/system-ready';

let watchReady = () => { };

const { VITE_APP_POWER_KEY, VITE_APP_ROUTING_KEY } = import.meta.env;

const localCached = useLocalCached();

const readyStatus = ref(ReadyStatusEnum.CHECK_POWER);

const setReadyStatus = (val: any) => readyStatus.value = val;

const unInstallWatchReady = () => isFunction(watchReady) && watchReady();

const redirectLogin = (router: Router) => {
    console.log('重定向登录地址');
    unInstallWatchReady();
    router.push({ name: PagesEnum.BASE_LOGIN_NAME });
};

const redirectHome = (router: Router) => {
    unInstallWatchReady();

    // 挂载路由
    console.log('重定向首屏地址');
};

const useReadyStatus: UseReadyStatus = {
    checkPower: function (): void {
        const status = localCached.has(VITE_APP_POWER_KEY) ? ReadyStatusEnum.HAS_POWER : ReadyStatusEnum.NOT_HAS_POWER;

        setReadyStatus(status);
    },
    hasPower: function (): void {
        const status = isNil(localCached.get(VITE_APP_POWER_KEY)) ? ReadyStatusEnum.NOT_USE_POWER : ReadyStatusEnum.CHECK_USE_POWER;

        setReadyStatus(status);
    },
    notHasPower: function (context): void {
        const { router, resolve } = context;

        resolve('没有找到可验证权限的身份认证!');

        redirectLogin(router);
    },
    checkUsePower: function (): void {
        console.log('发起请求验证身份是否可用');

        // .then()
        // 身份可用
        setReadyStatus(ReadyStatusEnum.USE_POWER);
        // 身份不可用
        // setReadyStatus(ReadyStatusEnum.NOT_USE_POWER);

        // .catch()
        // 身份是否可用验证失败
        // setReadyStatus(ReadyStatusEnum.CHECK_USE_POWER_FAIL);
    },
    checkUsePowerFail: function (context): void {
        const { router } = context;

        redirectLogin(router);
    },
    usePower: function (): void {
        // 检查身份是否需要更新
        setReadyStatus(ReadyStatusEnum.CHECK_UPDATE_POWER);
    },
    notUsePower: function (context): void {
        const { router, resolve } = context;

        resolve('身份不可用!');

        redirectLogin(router);
    },
    checkUpdatePower: function (): void {
        console.log('发起请求验证身份是否需要更新');

        // .then()
        // 身份需要更新
        // setReadyStatus(ReadyStatusEnum.NEED_UPDATE_POWER);
        // 身份不需要更新
        setReadyStatus(ReadyStatusEnum.NOT_NEED_UPDATE_POWER);

        // .catch()
        // 是否需要更新验证失败
        // setReadyStatus(ReadyStatusEnum.CHECK_UPDATE_POWER_FAIL);
    },
    checkUpdatePowerFail: function (context): void {
        const { router } = context;

        redirectLogin(router);
    },
    needUpdatePower: function (): void {
        console.log('发起请求更新身份');

        // .then()
        // 身份更新成功
        setReadyStatus(ReadyStatusEnum.UPDATE_POWER_SUCCESS);

        // .catch()
        // 身份更新失败
        // setReadyStatus(ReadyStatusEnum.UPDATE_POWER_FAIL);
    },
    updatePowerSuccess: function (): void {
        setReadyStatus(ReadyStatusEnum.CHECK_ROUTING);
    },
    updatePowerFail: function (context): void {
        const { router } = context;

        redirectLogin(router);
    },
    notNeedUpdatePower: function (): void {
        setReadyStatus(ReadyStatusEnum.UPDATE_POWER_SUCCESS);
    },
    checkRouting: function (): void {
        const status = localCached.has(VITE_APP_ROUTING_KEY) ? ReadyStatusEnum.HAS_ROUTING : ReadyStatusEnum.NOT_HAS_ROUTING;

        setReadyStatus(status);
    },
    hasRouting: function (): void {
        console.log('发起请求验证是否与身份匹配');

        // .then()
        // 匹配
        setReadyStatus(ReadyStatusEnum.POWER_MATE_ROUTING_SUCCESS);
        // 不匹配
        // setReadyStatus(ReadyStatusEnum.POWER_MATE_ROUTING);

        // .catch()
        // 验证失败
        // setReadyStatus(ReadyStatusEnum.POWER_MATE_ROUTING_FAIL);
    },
    powerMateRouting: function (context): void {
        const { router, resolve } = context;

        resolve('身份与路由不匹配请重新登录!');

        redirectLogin(router);
    },
    powerMateRoutingSuccess: function (context): void {
        const { router, resolve } = context;

        resolve('登录成功!');

        redirectHome(router);
    },
    powerMateRoutingFail: function (): void {
        setReadyStatus(ReadyStatusEnum.GET_ROUTING_RUN);
    },
    notHasRouting: function (): void {
        setReadyStatus(ReadyStatusEnum.GET_ROUTING_RUN);
    },
    getRoutingRun: function (): void {
        console.log('发起请求根据身份获取路由表');

        // .then()
        // 获取成功
        setReadyStatus(ReadyStatusEnum.GET_ROUTING_SUCCESS);

        // .catch()
        // 获取失败
        // setReadyStatus(ReadyStatusEnum.GET_ROUTING_FAIL);
    },
    getRoutingSuccess: function (context): void {
        const { router, resolve } = context;

        resolve('登录成功!');

        redirectHome(router);
    },
    getRoutingFail: function (context): void {
        const { router } = context;

        redirectLogin(router);
    },
}

const handlerWatchReady = (context: WatchReadyContext) => (nowStatus: any) => {
    const handler = useReadyStatus[nowStatus];

    isFunction(handler) && handler(context);
}

function useSystemReady(router: Router) {
    unInstallWatchReady();

    return new Promise((resolve, reject) => {
        watchReady = watch(readyStatus, handlerWatchReady({ resolve, reject, router }), { immediate: true });
    });
}

export default useSystemReady;