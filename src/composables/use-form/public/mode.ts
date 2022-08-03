/*
 * @Author: maggot-code
 * @Date: 2021-12-13 13:10:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-13 16:30:30
 * @Description: file content
 */
import {
    NAutoComplete,
    NCascader,
    NCheckbox,
    NCheckboxGroup,
    NInput,
    NInputNumber,
    NRadio,
    NSelect,
    NSwitch,
    NTreeSelect,
} from 'naive-ui';
import { default as Unknow } from '../component/FormUnknow';

export type modeType = "Unknow"
    | "NAutoComplete"
    | "NCascader"
    | "NCheckbox"
    | "NCheckboxGroup"
    | "NInput"
    | "NInputNumber"
    | "NRadio"
    | "NSelect"
    | "NSwitch"
    | "NTreeSelect";

export const modeSelect = {
    Unknow,
    NAutoComplete,
    NCascader,
    NCheckbox,
    NCheckboxGroup,
    NInput,
    NInputNumber,
    NRadio,
    NSelect,
    NSwitch,
    NTreeSelect
}