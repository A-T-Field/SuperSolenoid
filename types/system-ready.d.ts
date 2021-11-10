/*
 * @Author: maggot-code
 * @Date: 2021-11-02 16:54:05
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-09 14:00:16
 * @Description: file content
 */
export declare interface WatchReadyContext {
    resolve: any,
    reject: any,
    router: Router
}

export declare abstract class UseReadyStatus {
    checkPower: (context: WatchReadyContext) => void;
    hasPower: (context: WatchReadyContext) => void;
    notHasPower: (context: WatchReadyContext) => void;
    checkUsePower: (context: WatchReadyContext) => void;
    checkUsePowerFail: (context: WatchReadyContext) => void;
    usePower: (context: WatchReadyContext) => void;
    notUsePower: (context: WatchReadyContext) => void;
    checkUpdatePower: (context: WatchReadyContext) => void;
    checkUpdatePowerFail: (context: WatchReadyContext) => void;
    needUpdatePower: (context: WatchReadyContext) => void;
    updatePowerSuccess: (context: WatchReadyContext) => void;
    updatePowerFail: (context: WatchReadyContext) => void;
    notNeedUpdatePower: (context: WatchReadyContext) => void;
    checkRouting: (context: WatchReadyContext) => void;
    hasRouting: (context: WatchReadyContext) => void;
    powerMateRouting: (context: WatchReadyContext) => void;
    powerMateRoutingSuccess: (context: WatchReadyContext) => void;
    powerMateRoutingFail: (context: WatchReadyContext) => void;
    notHasRouting: (context: WatchReadyContext) => void;
    getRoutingRun: (context: WatchReadyContext) => void;
    getRoutingSuccess: (context: WatchReadyContext) => void;
    getRoutingFail: (context: WatchReadyContext) => void;
}