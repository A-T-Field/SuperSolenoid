/*
 * @Author: maggot-code
 * @Date: 2021-11-02 16:54:05
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-02 17:29:25
 * @Description: file content
 */
export declare abstract class UseReadyStatus {
    checkPower: () => void;
    hasPower: () => void;
    notHasPower: () => void;
    checkUsePower: () => void;
    checkUsePowerFail: () => void;
    usePower: () => void;
    notUsePower: () => void;
    checkUpdatePower: () => void;
    checkUpdatePowerFail: () => void;
    needUpdatePower: () => void;
    updatePowerSuccess: () => void;
    updatePowerFail: () => void;
    notNeedUpdatePower: () => void;
    checkRouting: () => void;
    hasRouting: () => void;
    powerMateRouting: () => void;
    powerMateRoutingSuccess: () => void;
    powerMateRoutingFail: () => void;
    notHasRouting: () => void;
    getRoutingRun: () => void;
    getRoutingSuccess: () => void;
    getRoutingFail: () => void;
}