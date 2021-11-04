/*
 * @Author: maggot-code
 * @Date: 2021-11-01 18:02:40
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-02 17:20:26
 * @Description: file content
 */
export enum ReadyStatusEnum {
    // 验证身份是否存在中
    CHECK_POWER = 'checkPower',
    // 身份存在
    HAS_POWER = 'hasPower',
    // 身份不存在
    NOT_HAS_POWER = 'notHasPower',

    // 验证身份是否可用中
    CHECK_USE_POWER = 'checkUsePower',
    // 验证身份是否可用失败
    CHECK_USE_POWER_FAIL = 'checkUsePowerFail',
    // 身份可用
    USE_POWER = 'usePower',
    // 身份不可用
    NOT_USE_POWER = 'notUsePower',

    // 验证身份是否需要更新中
    CHECK_UPDATE_POWER = 'checkUpdatePower',
    // 验证身份是否需要更新失败
    CHECK_UPDATE_POWER_FAIL = 'checkUpdatePowerFail',
    // 身份需要更新
    NEED_UPDATE_POWER = 'needUpdatePower',
    // 身份更新成功
    UPDATE_POWER_SUCCESS = 'updatePowerSuccess',
    // 身份更新失败
    UPDATE_POWER_FAIL = 'updatePowerFail',
    // 身份不需要更新
    NOT_NEED_UPDATE_POWER = 'notNeedUpdatePower',

    // 验证路由表是否存在
    CHECK_ROUTING = 'checkRouting',

    // 路由表存在
    HAS_ROUTING = 'hasRouting',
    // 验证身份与路由表是否匹配
    POWER_MATE_ROUTING = 'powerMateRouting',
    // 身份与路由表匹配
    POWER_MATE_ROUTING_SUCCESS = 'powerMateRoutingSuccess',
    // 身份与路由表不匹配
    POWER_MATE_ROUTING_FAIL = 'powerMateRoutingFail',

    // 路由表不存在
    NOT_HAS_ROUTING = 'notHasRouting',
    // 获取路由表中
    GET_ROUTING_RUN = 'getRoutingRun',
    // 路由表获取成功
    GET_ROUTING_SUCCESS = 'getRoutingSuccess',
    // 路由表获取失败
    GET_ROUTING_FAIL = 'getRoutingFail'
};