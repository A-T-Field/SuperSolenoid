/*
 * @Author: maggot-code
 * @Date: 2022-01-12 16:22:26
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-12 16:40:01
 * @Description: file content
 */
export interface ITokenProps {
    expectPrev?: (prev?: Token) => boolean;
    expectNext?: (next?: Token) => boolean;
}

export type TokenContext = {
    flag: string;
    [key: string]: any;
}

export type Token = ITokenProps & TokenContext;