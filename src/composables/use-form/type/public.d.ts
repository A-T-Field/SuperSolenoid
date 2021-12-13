/*
 * @Author: maggot-code
 * @Date: 2021-12-10 15:25:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-13 12:31:40
 * @Description: file content
 */
// 功能性类型
export type NonPropertyNames<T> = {
    [K in keyof T]: T[K] extends (...args: any) => any ? never : K
}[keyof T];

// 组件元组
export type ComponentUnit<
    Component = any,
    ComponentProps = any
    > = [Component] | [Component, ComponentProps] | any[];

// 展示方式
export type DisplayType = "visable" | "hidden";

// 交互方式
export type InteractType = "modify" | "preview" | "disable";

// 对齐方式
export type AlignType = "left" | "right";

// 标签位置
export type PositionType = "left" | "top";

// 共享模型配置参数
export type OptionsType = {
    loading: boolean;
    display: DisplayType;
    interact: InteractType;
    showColon: boolean;
    labelWidth: number;
    labelPlacement: PositionType;
    labelAlign: AlignType;
    requireMarkPlacement: AlignType;
};