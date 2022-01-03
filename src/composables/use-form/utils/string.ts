/*
 * @Author: maggot-code
 * @Date: 2021-12-31 14:50:29
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-31 14:50:29
 * @Description: file content
 */
import { isString } from './checkers';

// ansiRegex
const ansiRegex = () => {
    const pattern = [
        '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[a-zA-Z\\d]*)*)?\\u0007)',
        '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))',
    ].join('|');

    return new RegExp(pattern, 'g');
};

// astralRegex
const regex = '[\uD800-\uDBFF][\uDC00-\uDFFF]';

const astralRegex = (opts?: { exact: boolean }) => opts && opts.exact ? new RegExp(`^${regex}$`) : new RegExp(regex, 'g');

const stripAnsi = (input: any) => typeof isString(input) ? input.replace(ansiRegex(), '') : input;

export const stringLength = (input: string) => stripAnsi(input).replace(astralRegex(), ' ').length;