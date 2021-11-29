/*
 * @Author: maggot-code
 * @Date: 2021-10-27 15:33:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-29 15:23:55
 * @Description: file content
 */
declare interface Fn<T = any, R = T> {
    (...arg: T[]): R;
};

declare interface PromiseFn<T = any, R = T> {
    (...arg: T[]): Promise<R>;
};

declare interface ComponentElRef<T extends HTMLElement = HTMLDivElement> {
    $el: T;
};

declare type ComponentRef<T extends HTMLElement = HTMLDivElement> = ComponentElRef<T> | null;

declare type labelValueOptions = {
    label?: string,
    value?: any,
    disabled?: boolean,
    [key: string]: string | number | boolean
}[];

declare type emitType = (event: string, ...args: any[]) => void;

declare interface HandlerResolve {
    (value: Fn<any, any> | PromiseLike<Fn<any, any>>): void
}

declare interface HandlerReject {
    (reason?: any): void
}

declare interface EventFn {
    preventDefault: () => void
}

type Grow<T, A extends Array<T>> = ((x: T, ...xs: A) => void) extends ((...a: infer X) => void) ? X : never;
type GrowToSize<T, A extends Array<T>, N extends number> = { 0: A, 1: GrowToSize<T, Grow<T, A>, N> }[A['length'] extends N ? 0 : 1];

declare type FixedArray<T, N extends number> = GrowToSize<T, [], N>;