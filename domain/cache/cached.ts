/*
 * @Author: maggot-code
 * @Date: 2021-11-15 09:27:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-15 09:29:43
 * @Description: file content
 */
import type { CachedOptions } from '$/cache/types';

import { isNull } from '$/utils/is';

const { VITE_APP_CACHED_EXPIRE } = import.meta.env;
const DEFAULT_PREFIX_KEY = "S2";
const DEFAULT_CACHED_TIME = 60 * 60 * VITE_APP_CACHED_EXPIRE * 1;

class Cached {
    constructor(options: CachedOptions) {
        const { prefixKey, storage } = options;

        this.prefixKey = prefixKey ?? DEFAULT_PREFIX_KEY;
        this.storage = storage ?? localStorage;
    }

    private _prefixKey = DEFAULT_PREFIX_KEY;
    get prefixKey(): string {
        return this._prefixKey;
    }
    set prefixKey(val: string) {
        this._prefixKey = val;
    }

    private _storage = localStorage;
    get storage(): Storage {
        return this._storage;
    }
    set storage(val: Storage) {
        this._storage = val;
    }

    /**
     * @description: 获取 前缀 + 键名
     * @param {string} key 键名
     * @return {string} key name
     */
    private getKey(key: string): string {
        return `${this.prefixKey}${key}`.toUpperCase();
    }

    /**
     * @description: 获取缓存原始数据
     * @param {string} key 键名
     * @return {any} 原始缓存数据未做任何处理
     */
    private getValue(key: string): any {
        return this.storage.getItem(this.getKey(key));
    }

    /**
     * @description: 设置缓存
     * @param {string} key 键名
     * @param {any} value 数据值
     * @param {number} expireTime 超时时间
     * @return {void} 没有返回值
     */
    set(key: string, value: any, expireTime?: number): void {
        if (this.has(key)) return;

        const time = expireTime ?? DEFAULT_CACHED_TIME;
        const expire = Date.now() + time * 1000;
        const stringData = JSON.stringify({ value, expire });

        this.storage.setItem(this.getKey(key), stringData);
    }

    /**
     * @description: 是否存在键名
     * @param {string} key 键名
     * @return {boolean} true 存在键 | false 不存在键
     */
    has(key: string): boolean {
        return !isNull(this.getValue(key));
    }

    /**
     * @description: 获取缓存
     * @param {string} key 键名
     * @param {any} def 如果没有得到缓存或获取异常而返回的默认值
     * @return {any} 数据值
     */
    get(key: string, def?: any): any {
        const stringData = this.getValue(key);
        const defValue = def ?? null;
        if (!stringData) return defValue;

        try {
            const { value, expire } = JSON.parse(stringData);

            // 如果超过了有效期返回默认值
            if (Date.now() >= expire) {
                this.del(this.getKey(key));
                return defValue;
            }

            return value;
        } catch (error) {
            console.log(error);
            return defValue;
        }
    }

    /**
     * @description: 删除缓存
     * @param {string} key 键名
     * @return {void} 没有返回值
     */
    del(key: string): void {
        this.storage.removeItem(this.getKey(key));
    }

    /**
     * @description: 清除所有缓存（只会清除带有前缀的缓存）
     * @return {void} 没有返回值
     */
    clear(): void {
        console.log(this.storage);
    }
}

export default Cached;