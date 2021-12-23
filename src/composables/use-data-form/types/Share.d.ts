/*
 * @Author: maggot-code
 * @Date: 2021-12-16 17:38:41
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-20 15:41:43
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

export type DisplayState = {
    isVisable: boolean;
    isHidden: boolean;
};

export type InteractType = "modify" | "preview" | "disable" | ({} & string);

export type InteractState = {
    isModify: boolean;
    isPreview: boolean;
    isDisable: boolean;
};

export type ValueType<T = any> = string | number | boolean | null | undefined | Array<T> | Record<string | number, T>;

export type VNodeComponent = any;

export interface VesselProps {
    tips?: string;
    explain?: string;
    prefixText?: string;
    suffixText?: string;
    [key: string]: any;
};

export interface ComponentProps {
    beforePrefix?: string;
    afterSuffix?: string;
    prefixText?: string;
    suffixText?: string;
    [key: string]: any;
};

export type ShareProps = {
    loading: boolean;
    display: DisplayType;
    interact: InteractType;
};