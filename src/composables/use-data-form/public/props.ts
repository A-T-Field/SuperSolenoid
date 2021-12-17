/*
 * @Author: maggot-code
 * @Date: 2021-12-17 14:56:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 17:09:54
 * @Description: file content
 */
import type { PropType } from 'vue';
import type { GraphDOMtree } from '../types/Graph';

import { Form } from '../model/Form';
import { Field } from '../model/Field';
import { VoidField } from '../model/VoidField';

export const formProviderProps = {
    form: {
        type: Object as PropType<Form>,
        required: true
    },
    useSchema: {
        type: Boolean,
        default: true
    }
} as const;

export const formSchemaProps = {} as const;

export const fieldProps = {
    model: {
        type: Object as PropType<Field>,
        required: true
    }
} as const;

export const voidFieldProps = {
    model: {
        type: Object as PropType<VoidField>,
        required: true
    },
    children: {
        type: Object as PropType<GraphDOMtree>,
        default: () => ({})
    }
} as const;