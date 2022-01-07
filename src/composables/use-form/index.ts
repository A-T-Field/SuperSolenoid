/*
 * @Author: maggot-code
 * @Date: 2021-12-31 09:30:36
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-07 16:43:32
 * @Description: file content
 */
import type { IFormProps, SchemaProps } from './types';

import { Form, Schema } from './model';

const ExpRE = /^\s*\{\{([\s\S]*)\}\}\s*$/;
const Registry = {
    silent: false,
    compile(expression: string, scope = {}) {
        if (Registry.silent) {
            try {
                return new Function('$root', `with($root) { return (${expression}); }`)(
                    scope
                )
            } catch (error) {
                console.log(error);
            }
        } else {
            return new Function('$root', `with($root) { return (${expression}); }`)(
                scope
            )
        }
    },
}

export const shallowCompile = (source: any, scope: any) => {
    if (typeof source === 'string') {
        const matched = source.match(ExpRE)
        if (!matched) return source
        return Registry.compile(matched[1], scope)
    }
    return source
}

export * from './types';
export * from './utils';
export * from './model';

export const createForm = (props?: IFormProps) => {
    return new Form(props ?? {});
}

export const compileSchema = (props?: SchemaProps, key?: string) => {
    return Schema.parsers(props?.$schema ?? [], key).compiler();
}