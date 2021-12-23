/*
 * @Author: maggot-code
 * @Date: 2021-12-17 10:47:21
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-20 10:17:30
 * @Description: file content
 */
import type { ShareProps } from './Share';
import type { FieldGather } from './Field';

export type FormBaseProps = {
    inline: boolean;
    labelWidth: number;
    labelAlign: "left" | "right";
    labelPlacement: "left" | "top";
    requireMarkPlacement: "left" | "right";
    size: "small" | "medium" | "large";
};

export type FormProps = Partial<ShareProps & {
    baseProps: FormBaseProps
}>;

export type FormFieldsGather = Record<string, FieldGather>;