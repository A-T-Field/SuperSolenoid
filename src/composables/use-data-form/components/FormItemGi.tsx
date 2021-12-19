/*
 * @Author: maggot-code
 * @Date: 2021-12-19 16:43:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-19 21:07:21
 * @Description: file content
 */
import { h } from 'vue';
import { Field } from '../model/Field';
import { NGridItem } from '@/plugins/naive-ui';
import { default as FormItem } from './FormItem';

export default (model: Field) => {
    const { vesselProps } = model;

    return h(NGridItem, { ...vesselProps }, {
        default: () => FormItem(model)
    })
}