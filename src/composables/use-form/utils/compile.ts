/*
 * @Author: maggot-code
 * @Date: 2021-12-31 14:52:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-11 17:24:43
 * @Description: file content
 */
import { isString } from '../utils';

export const getHasOwnProperty = <T = any>(obj: T, property: any) => Object.prototype.hasOwnProperty.call(obj, property);

const ExtractREX = /^\s*\{\{([\s\S]*)\}\}\s*$/;
const Registry = {
    silent: false,
    compile(expressionCode: string) {
        if (Registry.silent) {
            try {
                return new Function('$self', '$deps', `return (${expressionCode})`);
            } catch { }
        } else {
            return new Function('$self', '$deps', `return (${expressionCode})`);
        }
    },
};

export const silent = (state: boolean = true) => Registry.silent = !!state;

export const shallowCompile = <Source = any>(source: Source) => {
    if (!isString(source)) return source;

    const matched = source.match(ExtractREX);

    if (!matched) return source;

    return Registry.compile(matched[1]);
}