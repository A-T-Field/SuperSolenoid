/*
 * @Author: maggot-code
 * @Date: 2021-12-13 20:58:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-14 18:25:21
 * @Description: file content
 */
import type { ValueType } from './Public';
import type { ShareOptions } from './Share';
import type { FormVoidTree } from './Form';

import { Field } from '../model/Field';

export type FieldExtends = {
    key: string;
    basePath: string;
    path: string;
    void: boolean;
    required: boolean;
    label: string;
    placeholder: string;
    tips: string;
    explain: string;
    prefix: string;
    suffix: string;
};

export type FieldOptions = ShareOptions
    & FieldExtends
    & {
        initialValue: ValueType;
        value: ValueType;
        children: FormVoidTree;
    };