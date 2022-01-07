/*
 * @Author: maggot-code
 * @Date: 2021-12-31 14:52:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-07 14:57:29
 * @Description: file content
 */
const ExpRE = /^\s*\{\{([\s\S]*)\}\}\s*$/;
const Registry = {
    silent: false,
    compile(expression: string, scope = {}) {
        if (Registry.silent) {
            try {
                return new Function('$root', `with($root) { return (${expression}); }`)(
                    scope
                )
            } catch { }
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

export const getHasOwnProperty = <T = any>(obj: T, property: any) => Object.prototype.hasOwnProperty.call(obj, property);