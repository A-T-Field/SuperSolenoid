/*
 * @Author: maggot-code
 * @Date: 2021-12-31 14:51:54
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-10 13:52:51
 * @Description: file content
 */
import { isArray, isString, isObject } from './checkers';
import { isValid } from './isEmpty';

type EachArrayIteratore<T> = (currentValue: T, key: number) => void | boolean;

type EachStringIteratore = (currentValue: string, key: number) => void | boolean;

type EachObjectIteratore<T = any> = (currentValue: T, key: string) => void | boolean;

type MapArrayIteratore<TItem, TResult> = (currentValue: TItem, key: number) => TResult;

type MapSringIteratore<TResult> = (currentValue: string, key: number) => TResult;

type MapObjectIteratore<TItem, TResult> = (currentValue: TItem, key: string) => TResult;

export const toArray = (val: any): Array<any> => isArray(val) ? val : isValid(val) ? [val] : val;

export function each(val: string, iterator: EachStringIteratore): void;
export function each<T>(val: Array<T>, iterator: EachArrayIteratore<T>): void;
export function each<T extends {}, TValue extends T[keyof T]>(val: T, iterator: EachObjectIteratore<TValue>): void;
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

export function map<T>(val: string, iterator: MapSringIteratore<T>): Array<T>;
export function map<TItem, TResult>(val: Array<TItem>, iterator: MapArrayIteratore<TItem, TResult>): Array<TResult>;
export function map<T extends {}, TResult>(val: T, iterator: MapObjectIteratore<T[keyof T], TResult>): Record<keyof T, TResult>;
export function map(val: any, iterator: any): any {
    const res = isArray(val) || isString(val) ? [] : {};
    each(val, (item, key) => {
        const value = iterator(item, key);
        if (isArray(res)) {
            res.push(value);
        } else {
            res[key] = value;
        }
    })
    return res;
}