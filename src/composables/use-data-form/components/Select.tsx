/*
 * @Author: maggot-code
 * @Date: 2021-12-20 14:39:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-20 14:45:57
 * @Description: file content
 */
import { h } from 'vue';
import { Field } from '../model/Field';
import { NSelect } from '@/plugins/naive-ui';

export default (model: Field) => {
    const {
        componentProps,
        getFieldValue,
        onUpdateValue
    } = model;

    return h(NSelect, {
        ...componentProps,
        value: getFieldValue(),
        onUpdateValue
    });
}