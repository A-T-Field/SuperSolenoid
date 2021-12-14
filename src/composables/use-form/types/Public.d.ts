/*
 * @Author: maggot-code
 * @Date: 2021-12-13 21:06:35
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-14 13:26:55
 * @Description: file content
 */
// 功能性类型
export type OmitState<P> = Omit<
    P,
    'schema'
>;

// 功能性类型
export type PickupPropertyNames<T> = {
    [K in keyof T]: T[K] extends (...args: any) => any ? never : K
}[keyof T];

// 展示方式
export type DisplayType = "visable" | "hidden";

// 交互方式
export type InteractType = "modify" | "preview" | "disable";

export type ValueType<T = any> = string | number | boolean | Array<T> | Record<string, T>;