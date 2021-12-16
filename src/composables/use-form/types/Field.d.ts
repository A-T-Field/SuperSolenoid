/*
 * @Author: maggot-code
 * @Date: 2021-12-16 00:02:23
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-16 16:16:56
 * @Description: file content
 */
import type {
    ValueType,
    VesselType,
    VesselProps,
    ComponentType,
    ComponentProps
} from './Public';
import type { ShareProps } from './Share';
import type { SchemaProps } from './Schema';

import { Field } from '../model/Field';
import { VoidField } from '../model/VoidField';

export type FieldGather = Field | VoidField | ({} & string);

export type FieldExtends = {
    key: string;
    parentName: Nullable<string>;
    path: string;
    address: string;
    level: number;
};

export type FieldBaseProps = ShareProps & {
    model: FieldGather;
    vessel: VesselType;
    vesselProps: VesselProps;
    component: ComponentType;
    componentProps: ComponentProps;
};

export type FieldOptions = FieldBaseProps & {
    required: boolean;
    initialValue: ValueType;
    value: ValueType;
};

export type FieldVoidOptions = FieldBaseProps & {
    children: SchemaProps;
};

export type FieldProps = FieldExtends & FieldOptions;

export type FieldVoidProps = FieldExtends & FieldVoidOptions;