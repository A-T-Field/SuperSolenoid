/*
 * @Author: maggot-code
 * @Date: 2021-12-19 23:54:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-20 00:22:34
 * @Description: file content
 */
import { h } from 'vue';
import { Field } from '../model/Field';
import { NFormItem } from '@/plugins/naive-ui';
import { default as Package } from '../components';

export default (model: Field) => {
    const { component, vesselProps } = model;

    return h(NFormItem, { ...vesselProps }, {
        default: () => Package[component](model)
    });
}