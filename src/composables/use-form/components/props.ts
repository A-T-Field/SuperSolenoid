/*
 * @Author: maggot-code
 * @Date: 2022-01-07 16:47:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-07 17:33:59
 * @Description: file content
 */
import type { PropType } from 'vue';

import { Form } from '../model/Form';

export const formProviderProps = {
    form: {
        type: Object as PropType<Form>,
        required: true
    }
} as const;