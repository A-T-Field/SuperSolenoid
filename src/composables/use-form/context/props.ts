/*
 * @Author: maggot-code
 * @Date: 2021-12-14 15:31:21
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-14 18:11:18
 * @Description: file content
 */
import type { PropType } from 'vue';
import type { FormVoidTree } from '../types/Form';

import { Form } from '../model/Form';
import { Field } from '../model/Field';

export const formProviderProps = {
    form: {
        type: Object as PropType<Form>,
        required: true
    }
} as const;

export const formRecursionProps = {
    domTree: {
        type: Object as PropType<FormVoidTree>,
        default: () => ({})
    }
} as const;

export const fromFieldProps = {
    field: {
        type: Object as PropType<Field>,
        default: () => ({})
    }
} as const;
export const formVoidFieldProps = {} as const;