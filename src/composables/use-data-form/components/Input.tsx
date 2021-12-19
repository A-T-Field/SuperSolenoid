/*
 * @Author: maggot-code
 * @Date: 2021-12-19 16:43:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-19 21:00:07
 * @Description: file content
 */
import { h } from 'vue';
import { Field } from '../model/Field';
import { NInput } from '@/plugins/naive-ui';

export default (model: Field) => {
    const {
        componentProps
    } = model;

    return h(NInput, { ...componentProps });
}