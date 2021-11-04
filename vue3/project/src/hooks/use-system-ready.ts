/*
* @Author: maggot-code
* @Date: 2021-11-01 17:20:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-03 14:50:51
* @Description: file content
*/
import { ref, watch } from "vue";
import { ReadyStatusEnum } from "@/enums/ready-enum";
import { isFunction, isNil } from '@/utils/is-type';
import { useLocalCached } from '@/utils/cached';

import type { UseReadyStatus } from '/#/system-ready';

const { VITE_APP_POWER_KEY, VITE_APP_ROUTING_KEY } = import.meta.env;

const localCached = useLocalCached();

const readyStatus = ref(ReadyStatusEnum.CHECK_POWER);

const setReadyStatus = (val: any) => readyStatus.value = val;

const getReadyStatus = () => readyStatus.value;

const redirectLogin = () => {
    console.log('重定向登录地址');
};

const redirectHome = () => {
    console.log('重定向首屏地址');
};

const useReadyStatus: UseReadyStatus = {
    checkPower: function (): void {
        if (localCached.has(VITE_APP_POWER_KEY)) {
            setReadyStatus(ReadyStatusEnum.HAS_POWER);
        } else {
            setReadyStatus(ReadyStatusEnum.NOT_HAS_POWER);
        }
    },
    hasPower: function (): void {
        if (isNil(localCached.get(VITE_APP_POWER_KEY))) {
            setReadyStatus(ReadyStatusEnum.NOT_USE_POWER)
        } else {
            setReadyStatus(ReadyStatusEnum.CHECK_USE_POWER);
        }
    },
    notHasPower: function (): void {
        redirectLogin();
    },
    checkUsePower: function (): void {
        console.log('发起请求验证身份是否可用');
        // 身份是否可用验证失败
        // setReadyStatus(ReadyStatusEnum.CHECK_USE_POWER_FAIL);

        // 身份可用
        setReadyStatus(ReadyStatusEnum.USE_POWER);

        // 身份不可用
        // setReadyStatus(ReadyStatusEnum.NOT_USE_POWER);
    },
    checkUsePowerFail: function (): void {
        redirectLogin();
    },
    usePower: function (): void {
        setReadyStatus(ReadyStatusEnum.CHECK_UPDATE_POWER);
    },
    notUsePower: function (): void {
        redirectLogin();
    },
    checkUpdatePower: function (): void {
        console.log('发起请求验证身份是否需要更新');

        // 是否需要更新验证失败
        // setReadyStatus(ReadyStatusEnum.CHECK_UPDATE_POWER_FAIL);

        // 身份需要更新
        // setReadyStatus(ReadyStatusEnum.NEED_UPDATE_POWER);

        // 身份不需要更新
        setReadyStatus(ReadyStatusEnum.NOT_NEED_UPDATE_POWER);
    },
    checkUpdatePowerFail: function (): void {
        redirectLogin();
    },
    needUpdatePower: function (): void {
        console.log('发起请求更新身份');

        // 身份更新成功
        setReadyStatus(ReadyStatusEnum.UPDATE_POWER_SUCCESS);

        // 身份更新失败
        // setReadyStatus(ReadyStatusEnum.UPDATE_POWER_FAIL);
    },
    updatePowerSuccess: function (): void {
        setReadyStatus(ReadyStatusEnum.CHECK_ROUTING);
    },
    updatePowerFail: function (): void {
        redirectLogin();
    },
    notNeedUpdatePower: function (): void {
        setReadyStatus(ReadyStatusEnum.UPDATE_POWER_SUCCESS);
    },
    checkRouting: function (): void {
        if (localCached.has(VITE_APP_ROUTING_KEY)) {
            setReadyStatus(ReadyStatusEnum.HAS_ROUTING);
        } else {
            setReadyStatus(ReadyStatusEnum.NOT_HAS_ROUTING);
        }
    },
    hasRouting: function (): void {
        console.log('发起请求验证是否与身份匹配');

        // 验证失败
        // setReadyStatus(ReadyStatusEnum.POWER_MATE_ROUTING);

        // 匹配
        setReadyStatus(ReadyStatusEnum.POWER_MATE_ROUTING_SUCCESS);

        // 不匹配
        // setReadyStatus(ReadyStatusEnum.POWER_MATE_ROUTING_FAIL);
    },
    powerMateRouting: function (): void {
        redirectLogin();
    },
    powerMateRoutingSuccess: function (): void {
        redirectHome();
    },
    powerMateRoutingFail: function (): void {
        setReadyStatus(ReadyStatusEnum.GET_ROUTING_RUN);
    },
    notHasRouting: function (): void {
        setReadyStatus(ReadyStatusEnum.GET_ROUTING_RUN);
    },
    getRoutingRun: function (): void {
        console.log('发起请求根据身份获取路由表');

        // 获取成功
        setReadyStatus(ReadyStatusEnum.GET_ROUTING_SUCCESS);

        // 获取失败
        // setReadyStatus(ReadyStatusEnum.GET_ROUTING_FAIL);
    },
    getRoutingSuccess: function (): void {
        redirectHome();
    },
    getRoutingFail: function (): void {
        redirectLogin();
    },
}

const handlerWatchReady = (nowStatus: any) => {
    const handler = useReadyStatus[nowStatus];

    isFunction(handler) && handler();
}

const watchReady = watch(readyStatus, handlerWatchReady, { immediate: true });

function useSystemReady() {
    return new Promise((resolve, reject) => {

    });
}

export default useSystemReady;