/*
 * @Author: maggot-code
 * @Date: 2021-12-19 23:53:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-20 00:21:56
 * @Description: file content
 */
import { h } from 'vue';
import { Field } from '../model/Field';
import { NGridItem } from '@/plugins/naive-ui';
import { default as Package } from '../components';

export default (model: Field) => {
    const { vesselProps } = model;

    return h(NGridItem, { ...vesselProps }, {
        default: () => Package['FormItem'](model)
    });
}