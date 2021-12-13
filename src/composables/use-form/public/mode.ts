/*
 * @Author: maggot-code
 * @Date: 2021-12-13 13:10:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-13 15:43:32
 * @Description: file content
 */
import {
    NInput,
    NInputNumber,
    NSelect,
} from 'naive-ui';
import { default as Unknow } from '../component/FormUnknow';

export type modeType = "Unknow"
    | "NInput"
    | "NInputNumber"
    | "NSelect";

export const modeSelect = {
    Unknow,
    NInput,
    NInputNumber,
    NSelect
}