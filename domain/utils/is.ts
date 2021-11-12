/*
 * @Author: maggot-code
 * @Date: 2021-11-10 13:18:28
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-12 15:48:44
 * @Description: file content
 */
export const toString = Object.prototype.toString;

/**
 * @description: 判断值是否被定义
 * @param {unknown} val
 * @return {boolean}
 */
export function isUndefined<T = unknown>(val: unknown): val is T {
    return typeof val === 'undefined';
};

/**
 * @description: 判断值是否为 null
 * @param {unknown} val
 * @return {boolean}
 */
export function isNull(val: unknown): val is null {
    return val === null;
};

/**
 * @description: 判断值是否未定义并且也不为空
 * @param {unknown} val
 * @return {boolean}
 */
export function isNil<T = unknown>(val: unknown): val is T {
    return isUndefined(val) || isNull(val);
};

/**
 * @description: 判断是否为一个函数
 * @param {unknown} val
 * @return {boolean}
 */
export function isFunction<T = Function>(val: unknown): val is T {
    return is(val, 'Function');
};

/**
 * @description: 判断值是否是对象
 * @param {any} val
 * @return {boolean}
 */
export function isObject(val: any): val is Record<any, any> {
    return is(val, 'Object');
};

/**
 * @description: 判断值是否是数组
 * @param {any} val
 * @return {boolean}
 */
export function isArray(val: any): val is Array<any> {
    return val && Array.isArray(val);
};

/**
 * @description: 判断值是否是时间对象
 * @param {any} val
 * @return {boolean}
 */
export function isDate(val: any): val is Date {
    return is(val, 'Date');
};

/**
 * @description: 判断值是否是数字
 * @param {unknown} val
 * @return {boolean}
 */
export function isNumber(val: unknown): val is number {
    return is(val, 'Number');
};

/**
 * @description: 判断值是否是字符串
 * @param {unknown} val
 * @return {boolean}
 */
export function isString(val: unknown): val is string {
    return is(val, 'String');
};

/**
 * @description: 判断值是否为空字符串
 * @param {unknown} val
 * @return {boolean}
 */
export function isEmptyString<T = unknown>(val: unknown): val is T {
    return !isString(val) || val.replace(/\s+/g, "").length <= 0;
};

/**
 * @description: 判断值是否是布尔值
 * @param {unknown} val
 * @return {boolean}
 */
export function isBoolean(val: unknown): val is boolean {
    return is(val, 'Boolean');
};

/**
 * @description: 判断值是否是promise
 * @param {unknown} val
 * @return {boolean}
 */
export function isPromise<T = any>(val: unknown): val is Promise<T> {
    return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch);
};

/**
 * @description: 判断值是否是异步函数
 * @param {unknown} val
 * @return {boolean}
 */
export function isAsyncFunction<T = any>(val: unknown): val is Promise<T> {
    return is(val, 'AsyncFunction');
};

/**
 * @description: 判断值是否为图片元素
 * @param {Element} o
 * @return {*}
 */
export function isImageDom(o: Element): boolean {
    return o && ['IMAGE', 'IMG'].includes(o.tagName);
};

/**
 * @description: 判断值是否为某个类型
 * @param {unknown} val
 * @param {string} type 类型的描述
 * @return {boolean}
 */
function is(val: unknown, type: string): boolean {
    return toString.call(val) === `[object ${type}]`;
};

export default is;