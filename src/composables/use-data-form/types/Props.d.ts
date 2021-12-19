/*
 * @Author: maggot-code
 * @Date: 2021-12-17 14:56:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-19 23:15:16
 * @Description: file content
 */
import type { ExtractPropTypes } from 'vue';

import {
    formProviderProps,
} from '../public/props';

export type FormProviderSetupProps = ExtractPropTypes<typeof formProviderProps>;