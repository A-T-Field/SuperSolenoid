/*
 * @Author: maggot-code
 * @Date: 2022-01-04 14:27:31
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-05 14:23:40
 * @Description: file content
 */
import type { PropType } from 'vue';

import { FormSchema } from './types';
import { Form } from '../model/Form';

export const formProviderProps = {
    form: {
        type: Object as PropType<Form>,
        required: true
    },
    schema: {
        type: Object as PropType<FormSchema>,
        default: () => ({})
    }
} as const;

export const formRecursionProps = {
    schema: {
        type: Object as PropType<FormSchema>,
        default: () => ({})
    }
} as const;