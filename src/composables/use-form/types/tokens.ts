/*
 * @Author: maggot-code
 * @Date: 2022-01-14 16:16:42
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-14 16:35:46
 * @Description: file content
 */
export interface ITokenProps {
    expectPrev?: (prev: Token) => boolean;
    expectNext?: (next: Token) => boolean;
    updateContext?: (prev: Token) => void;
}

export type Context = {
    tag: string;
    [key: string]: any;
}

export type Token = ITokenProps & Context;

export interface ITokenState {
    type: Token;
    pos: number;
    value: any;
}