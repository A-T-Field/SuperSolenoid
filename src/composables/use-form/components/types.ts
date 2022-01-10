/*
 * @Author: maggot-code
 * @Date: 2022-01-07 16:47:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-07 16:53:38
 * @Description: file content
 */
import type { ExtractPropTypes } from 'vue';

import {
    formProviderProps
} from './props';

export type FormProviderProps = ExtractPropTypes<typeof formProviderProps>;