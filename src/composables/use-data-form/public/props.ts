/*
 * @Author: maggot-code
 * @Date: 2021-12-17 14:56:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-19 23:15:18
 * @Description: file content
 */
import type { PropType } from 'vue';

import { Form } from '../model/Form';

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