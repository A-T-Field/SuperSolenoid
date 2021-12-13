/*
 * @Author: maggot-code
 * @Date: 2021-12-01 22:32:28
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-03 16:28:54
 * @Description: file content
 */
let IDX = 36,
    HEX = ''
while (IDX--) HEX += IDX.toString(36)

export function uid(len?: number) {
    let str = '',
        num = len || 11
    while (num--) str += HEX[(Math.random() * 36) | 0]
    return str
}