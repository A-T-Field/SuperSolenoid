/*
 * @Author: maggot-code
 * @Date: 2021-12-20 00:24:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-20 00:26:00
 * @Description: file content
 */
import { h } from 'vue';
import { Field } from '../model/Field';
import { NInput } from '@/plugins/naive-ui';

export default (model: Field) => {
    const { componentProps } = model;

    return h(NInput, { ...componentProps });
}