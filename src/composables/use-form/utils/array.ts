/*
 * @Author: maggot-code
 * @Date: 2021-12-31 14:51:54
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-05 14:39:24
 * @Description: file content
 */
import { isArray, isString, isObject } from './checkers';
import { isValid } from './isEmpty';

type EachArrayIteratore<T> = (currentValue: T, key: number) => void | boolean;

type EachStringIteratore = (currentValue: string, key: number) => void | boolean;

type EachObjectIteratore<T = any> = (currentValue: T, key: string) => void | boolean;

export const toArray = (val: any): Array<any> => isArray(val) ? val : isValid(val) ? [val] : val;

export function each(val: string, iteratore: EachStringIteratore): void;
export function each<T>(val: Array<T>, iteratore: EachArrayIteratore<T>): void;
export function each<T extends {}, TValue extends T[keyof T]>(
    val: T,
    iteratore: EachObjectIteratore<TValue>
): void;
export function each(val: any, iterator: any): void {
    if (isArray(val) || isString(val)) {
        for (let index = 0; index < val.length; index++) {
            if (iterator(val[index], index) === false) return;
        }
    } else if (isObject(val)) {
        for (const key in val) {
            if (Object.prototype.hasOwnProperty.call(val, key)) {
                if (iterator(val[key], key) === false) return;
            }
        }
    }
}