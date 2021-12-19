/*
 * @Author: maggot-code
 * @Date: 2021-12-20 00:07:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-20 00:14:13
 * @Description: file content
 */
import type { VNode } from 'vue';

type PackageProps = Array<[string, Fn]>;
type PackageReturn = Record<string, (...args: any) => VNode>;

export const usePackage = (data: PackageProps): PackageReturn => {
    const pack: PackageReturn = {};

    data.forEach(item => {
        const [name, fn] = item;
        pack[name] = fn;
    });

    return pack;
};