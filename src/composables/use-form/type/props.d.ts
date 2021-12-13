/*
 * @Author: maggot-code
 * @Date: 2021-12-13 09:51:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-13 09:58:04
 * @Description: file content
 */
import type { ExtractPropTypes } from 'vue';

import {
    providerProps,
    fieldProps,
    modeProps,
    vesselProps
} from '../public/props';

export type ProviderSetupProps = ExtractPropTypes<typeof providerProps>;

export type FieldSetupProps = ExtractPropTypes<typeof fieldProps>;

export type ModeSetupProps = ExtractPropTypes<typeof modeProps> & FieldSetupProps;

export type VesselSetupProps = ExtractPropTypes<typeof vesselProps>;