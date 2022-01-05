/*
 * @Author: maggot-code
 * @Date: 2022-01-04 13:16:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-05 09:49:16
 * @Description: file content
 */
import type { PathPattern, IPathProps } from './types';

import { isRef } from 'vue';
import {
    isObject,
    isArray,
    isNumber,
    isString,
    isBoolean,
    isVoid,
    isValid,
    isSymbolLike,
    isFunc
} from '../utils';

interface IMemoized {
    cache: Map<any, any>;
    handler(...agrs: Array<any>): any;
}

const MAX_MEMOIZE_SIZE = 500;
const INFINITY = 1 / 0;
const charCodeOfDot = '.'.charCodeAt(0);
const reEscapeChar = /\\(\\)/g;
const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
const reIsPlainProp = /^\w*$/;
const rePropName = RegExp(
    // Match anything that isn't a dot or bracket.
    '[^.[\\]]+' + '|' +
    // Or match property names within brackets.
    '\\[(?:' +
    // Match a non-string expression.
    '([^"\'][^[]*)' + '|' +
    // Or match strings (supports escaping characters).
    '(["\'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2' +
    ')\\]' + '|' +
    // Or match "" as the space between consecutive dots or empty brackets.
    '(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))', 'g');

function memoize(func: Function, resolve: Function) {
    if (!isFunc(func) || (isValid(resolve) && !isFunc(resolve))) {
        throw new TypeError("需要函数!");
    }

    const memoized: IMemoized = {
        cache: new Map(),
        handler(...args) {
            const key = resolve ? resolve.apply(this, args) : args[0];

            if (memoized.cache.has(key)) return memoized.cache.get(key);

            const res = func.apply(this, args);

            memoized.cache = memoized.cache.set(key, res) || memoized.cache;

            return res;
        }
    }
    return memoized;
}

function memoizeCapped(func: Function) {
    const res = memoize(func, (key: any) => {
        const { cache } = res;

        if (cache.size === MAX_MEMOIZE_SIZE) cache.clear();

        return key;
    });

    return res.handler;
}

const stringToPath = memoizeCapped((input: string) => {
    const result: Array<string> = [];

    if (input.charCodeAt(0) === charCodeOfDot) result.push('');

    input.replace(rePropName, (match, expression, quote, subString) => {
        let key = match;

        if (quote) {
            key = subString.replace(reEscapeChar, '$1');
        } else if (expression) {
            key = expression.trim();
        }

        result.push(key);

        return key;
    });

    return result;
});

const toKey = (input: string) => {
    if (isString(input) || isSymbolLike(input)) return input;

    const result = `${input}`;

    return (result === '0' && (1 / input) == -INFINITY) ? '-0' : result;
}

const isKey = (input: PathPattern) => {
    if (isArray(input)) return false;

    if (isNumber(input) || isBoolean(input) || isVoid(input) || isSymbolLike(input)) return true;

    return reIsPlainProp.test(input) || !reIsDeepProp.test(input);
}

const caseAddress = (input: PathPattern) => {
    if (isArray(input)) return input;

    return isKey(input) ? [input] : stringToPath(input);
}

const parse = (input: PathPattern) => {
    const address = caseAddress(input);

    return {
        length: address.length,
        entire: input,
        section: address
    }
}

const seek = (target: object, path: Path) => {
    if (isVoid(target) || !isObject(target)) return [false, undefined];

    let index = 0;

    while (index < path.length) {
        target = target[toKey(path.section[index++])]
    }

    return (index && index === path.length) ? [true, target] : [false, undefined];
}

class Path {
    length: number;
    entire: PathPattern;
    section: Array<string>;

    constructor(props: IPathProps) {
        const {
            length,
            entire,
            section
        } = parse(props.basePath);

        this.length = length;
        this.entire = entire;
        this.section = section;
    }

    has = (target: object) => {
        const [exist] = seek(target, this);

        return exist;
    }

    at = (target: object) => {
        const [_, value] = seek(target, this);

        return value;
    }

    do = <V extends object = any>(target: object, val: V): void => {
        let [exist] = seek(target, this);

        if (!exist) return;

        this.is<V>(target, val);
    }

    is = <V extends object = any>(target: object, val: V): void => {
        let [_, value] = seek(target, this);

        if (isRef<V>(value)) {
            value.value = val;
        } else {
            value = val;
        }
    }

    static parse = (basePath: PathPattern) => {
        const path = new Path({ basePath });

        return path;
    }
}

export {
    Path
}