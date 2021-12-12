/*
 * @Author: maggot-code
 * @Date: 2021-12-12 22:14:42
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-12 22:29:26
 * @Description: file content
 */
import type {
    PropType,
    DefineComponent,
} from 'vue';
import type { ComponentUnit } from '../type/public';

import { default as FormModel } from '../domain/Form';

export const providerProps = {
    form: {
        type: Object as PropType<FormModel>,
        required: true
    }
} as const;

export const fieldProps = {
    name: {
        type: String,
        required: true
    },
    value: {},
    component: {
        type: Array as PropType<
            ComponentUnit<DefineComponent, any>
        >,
        default: () => []
    }
} as const;