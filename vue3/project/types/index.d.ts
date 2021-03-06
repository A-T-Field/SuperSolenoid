/*
 * @Author: maggot-code
 * @Date: 2021-10-27 15:33:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-02 15:53:06
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

declare type componentRef<T extends HTMLElement = HTMLDivElement> = ComponentElRef<T> | null;

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