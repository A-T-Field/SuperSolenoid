/*
 * @Author: maggot-code
 * @Date: 2022-01-12 15:59:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-12 18:03:27
 * @Description: file content
 */
import type { ITokenProps, TokenContext, Token } from '../types/tokens';

const ContextType = (flag: string, props?: any): TokenContext => ({ flag, ...props });

const TokenType = (flag: string, props: ITokenProps): Token => ({ flag, ...props });

export const PointerContext = ContextType(`$self`);
export const DependContext = ContextType(`$deps`);
export const ValuesContext = ContextType(`$values`);
export const RequestContext = ContextType(`@request`);
export const IndexesContext = ContextType(`[]`);
export const CallContext = ContextType(`()`);

class Tokens { }

export {
    Tokens
}