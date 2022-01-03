/*
 * @Author: maggot-code
 * @Date: 2021-12-31 14:41:04
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-31 18:10:01
 * @Description: file content
 */
import type { PathPattern, PathHandler } from './types';

import {
    isArray,
    isNumber,
    isBoolean,
    isValid,
    isVoid,
    isSymbolLike
} from '../utils';
const charCodeOfDot = '.'.charCodeAt(0)
const reEscapeChar = /\\(\\)?/g
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
    '(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))'
    , 'g');
const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
const reIsPlainProp = /^\w*$/;
const isKey: PathHandler<boolean> = (input, target) => {
    if (isArray(input)) return false;

    if (isNumber(input) || isBoolean(input) || isVoid(input) || isSymbolLike(input)) return true;

    return reIsPlainProp.test(input) || !reIsDeepProp.test(input) || (isValid(target) && input in Object(target));
}

const caseAddress: PathHandler<Array<any>> = (input, target) => {
    if (isArray(input)) return input;

    return isKey(input, target) ? [input] : [];
}

const get = (object: object, pattern: PathPattern) => {
    // const address = caseAddress(pattern, object);

}

export {
    get
}