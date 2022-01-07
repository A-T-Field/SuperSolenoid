/*
 * @Author: maggot-code
 * @Date: 2022-01-04 13:16:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-06 11:05:27
 * @Description: file content
 */
import type { PathPattern, IParses } from '../types/path';

const MAX_MEMOIZE_SIZE = 500;
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

const parse: IParses = (source, keyword, level = 0) => {
    console.log(source, keyword, level);

    return new Path();
}

class Path {
    protected cache = new Map<PathPattern, any>();

    constructor() { }

    static parse = parse
}

export {
    Path
}