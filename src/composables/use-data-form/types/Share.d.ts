/*
 * @Author: maggot-code
 * @Date: 2021-12-16 17:38:41
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-19 15:19:21
 * @Description: file content
 */
export type OmitState<P> = Omit<
    P,
    "children"
>;

export type NonPropertyNames<T> = {
    [K in keyof T]: T[K] extends (...args: any) => any ? never : K
}[keyof T];

export type PickSetup<T> = Partial<
    Pick<T,
        NonPropertyNames<OmitState<T>>
    >
>;

export type DisplayType = "visable" | "hidden" | ({} & string);

export type InteractType = "modify" | "preview" | "disable" | ({} & string);

export type ValueType<T = any> = string | number | boolean | null | undefined | Array<T> | Record<string | number, T>;

export type VNodeComponent = any;

export type VesselProps = Record<string, any>;

export type ComponentProps = Record<string, any>;

export type ShareProps = {
    loading: boolean;
    display: DisplayType;
    interact: InteractType;
};