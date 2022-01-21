/*
 * @Author: maggot-code
 * @Date: 2022-01-14 16:15:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-14 16:32:05
 * @Description: file content
 */
import type { ITokenProps, Context, Token } from '../types/tokens';

const ContextType = (tag: string, props?: any): Context => ({ tag, ...props });

const TokenType = (tag: string, props?: ITokenProps): Token => ({ tag, ...props });

class Tokens {
    constructor() { }
}

export const nameTok = TokenType(`name`);
export const stringTok = TokenType(`string`);
export const numberTok = TokenType(`number`);
export const eofTok = TokenType(`eof`);

export {
    Tokens
}