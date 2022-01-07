/*
 * @Author: maggot-code
 * @Date: 2022-01-04 13:16:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-07 14:23:40
 * @Description: file content
 */
import type { Ref, WatchStopHandle } from 'vue';
import type { PathPattern, IParser, ISeeks, IPathProps } from '../types/path';
import type { FieldTree } from '../types/graph';

import { unref, ref, reactive, computed, watchEffect } from 'vue';
import {
    isValid,
    isVoid,
    isSymbolLike,
    isString,
    isArray,
    isNumber,
    isBoolean,
    isEmpty,
} from '../utils';

// const MAX_MEMOIZE_SIZE = 500;
const INFINITY = 1 / 0;
const charCodeOfDot = '.'.charCodeAt(0);
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
const reEscapeChar = /\\(\\)/g;
const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
const reIsPlainProp = /^\w*$/;

const stringToPath: IParser<Array<string>> = (source) => {
    const result: Array<string> = [];

    source.charCodeAt(0) === charCodeOfDot && result.push("");

    source.replace(rePropName, (match, expression, quote, subString) => {
        let key = match;

        if (quote) {
            key = subString.replace(reEscapeChar, "$1");
        } else if (expression) {
            key = expression.trim();
        }

        result.push(key);

        return key;
    });

    return result;
}

const seeks: ISeeks = (target, section, length) => {
    let index: number = 0,
        value: any;

    while (isValid(target) && index < length) {
        value = target[toKey(section[index++])]
    }

    return {
        really: !isEmpty(index) && index === length,
        value
    }
}

const toKey = (token: string | number) => {
    if (isString(token) || isSymbolLike(token)) return token;

    const result = `${token}`;

    return (result === '0' && (1 / token) == -INFINITY) ? '-0' : result;
}

const isKey: IParser<boolean> = (source) => {
    if (isArray(source)) return false;

    if (isNumber(source) || isBoolean(source) || isVoid(source) || isSymbolLike(source)) return true;

    return reIsPlainProp.test(source) || !reIsDeepProp.test(source);
}

const handlerSource: IParser<Array<string>> = (source) => {
    if (isArray(source)) return source;

    return isKey(source) ? [source] : stringToPath(source);
}

const parser: IParser = (source) => {
    return new Path({
        source,
        section: handlerSource(source)
    });
}

class Path<Target = FieldTree>{
    private cacheWatch: WatchStopHandle;
    protected cache = new WeakMap<Path<Target>, any>();
    protected selfSource: Ref<PathPattern>;
    protected selfSection: Array<string>;

    constructor(props: IPathProps) {
        this.selfSource = ref(props.source);
        this.selfSection = reactive(props.section);
        this.cacheWatch = watchEffect(() => { });
    }

    get source() {
        return unref(this.selfSource)
    }
    get section() {
        return unref(this.selfSection);
    }
    get length() {
        return unref(computed(() => {
            return this.section.length;
        }));
    }

    toArray = () => this.section.splice(0)

    toString = () => this.source.toString()

    has = (target: Target): boolean => {
        const { really } = seeks(target, this.section, this.length);

        return really;
    }
    at = (target: Target, defaultValue?: any): any => {
        const { really, value } = seeks(target, this.section, this.length);

        return really ? value : defaultValue;
    }
    // do = (target: Target, val: any): any => { }
    // kill = (target: Target): boolean => {
    //     return true;
    // }
    // is = (target: Target, defaultValue: any): any => { }

    onDestroy = () => {
        this.cacheWatch();
    }

    static parser = parser
}

export {
    Path
}