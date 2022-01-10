/*
 * @Author: maggot-code
 * @Date: 2022-01-06 10:41:06
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-07 17:42:16
 * @Description: file content
 */
import { Field } from '../model/Field';
import { VoidField } from '../model/VoidField';

export type NonPropertyNames<T> = {
    [K in keyof T]: T[K] extends (...args: any) => any ? never : K
}[keyof T];

export type ElementComponent = any;

export type CheckValueType =
    "string"
    | "number"
    | "boolean"
    | "null"
    | "undefined"
    | "array"
    | "object"
    | ({} & string);

export type DisplayType = "vissable" | "hidden" | ({} & string);

export type InteractType = "modify" | "preview" | "disable" | ({} & string);

export type RequestType = {
    url: string;
    method: "GET" | "POST" | ({} & string);
    format: "json" | "formData" | ({} & string);
};

export type GatherFields = Field | VoidField;

export type DataFields = Field;