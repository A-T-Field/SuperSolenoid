/*
 * @Author: maggot-code
 * @Date: 2021-12-14 15:31:14
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-14 18:11:54
 * @Description: file content
 */
import type { ExtractPropTypes } from 'vue';

import {
    formProviderProps,
    formRecursionProps,
    fromFieldProps,
} from '../context/props';

export type FormProviderSetupProps = ExtractPropTypes<typeof formProviderProps>;

export type FormRecursionSetupProps = ExtractPropTypes<typeof formRecursionProps>;

export type FormFieldSetupProps = ExtractPropTypes<typeof fromFieldProps>;

