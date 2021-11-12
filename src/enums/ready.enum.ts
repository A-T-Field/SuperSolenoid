/*
 * @Author: maggot-code
 * @Date: 2021-11-12 11:16:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-12 18:23:58
 * @Description: file content
 */
interface StatusController {
    (status?: ReadyStatus): Promise<ReadyStatus | undefined>
}

export type ReadyStatus = 'checkPower'
    | 'hasPower'
    | 'notHasPower'
    | 'checkPowerUse'
    | 'usePower'
    | 'notUsePower'
    | 'checkPowerUseFail'
    | 'checkPowerUpdate'
    | 'needPower'
    | 'notNeedPower'
    | 'checkPowerUpdateFail'
    | 'updatePower'
    | 'updatePowerSuccess'
    | 'updatePowerError'
    | 'updatePowerFail'

export declare abstract class ReadyStatusController {
    // 检查身份是否存在
    checkPower: StatusController;
    // 身份存在
    hasPower: StatusController;
    // 身份不存在
    notHasPower: StatusController;
    // 校验身份是否可用
    checkPowerUse: StatusController;
    // 身份可用
    usePower: StatusController;
    // 身份不可用
    notUsePower: StatusController;
    // 身份校验异常
    checkPowerUseFail: StatusController;
    // 校验身份是否需要更新
    checkPowerUpdate: StatusController;
    // 需要更新
    needPower: StatusController;
    // 不需要更新
    notNeedPower: StatusController;
    // 更新校验异常
    checkPowerUpdateFail: StatusController;
    // 更新身份
    updatePower: StatusController;
    // 更新成功
    updatePowerSuccess: StatusController;
    // 更新失败
    updatePowerError: StatusController;
    // 更新异常
    updatePowerFail: StatusController;
}