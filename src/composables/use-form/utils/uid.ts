/*
 * @Author: maggot-code
 * @Date: 2021-12-31 14:50:07
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-11 17:34:08
 * @Description: file content
 */
let IDX = 36,
    HEX = ''
while (IDX--) HEX += IDX.toString(36)

export function uid(len?: number) {
    let str = '',
        num = len || 7;

    while (num--) str += HEX[(Math.random() * 36) | 0]

    return str;
}