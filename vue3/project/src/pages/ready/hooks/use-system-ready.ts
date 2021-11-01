/*
* @Author: maggot-code
* @Date: 2021-11-01 17:20:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-01 18:23:45
* @Description: file content
*/
import { ref } from 'vue';
import { ReadyStatusEnum } from "@/enums/ready-enum";

import type { Ref } from 'vue';

class SystemReady {
    constructor() { };
    protected readyStatus: Ref<ReadyStatusEnum> = ref(ReadyStatusEnum.CHECK_POWER);

    // 检查身份是否存在
    handlerHasPower() { };

    // 检查身份是否可用
    handlerIsPower() { };

    // 检查身份是否需要更新
    handlerPowerHasUpdate() { };

    // 检查路由表是否存在
    handlerHasRouting() { };

    // 获取路由表
    protected getRouting() { };
}

function useSystemReady() {
    const systemReady = new SystemReady();
    console.log(systemReady);

    return systemReady;
};

export default useSystemReady;