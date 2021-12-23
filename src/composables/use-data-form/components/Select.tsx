/*
 * @Author: maggot-code
 * @Date: 2021-12-20 14:39:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-23 15:27:25
 * @Description: file content
 */
import { h, computed } from 'vue';
import { Field } from '../model/Field';
import { NSelect } from '@/plugins/naive-ui';

export default (model: Field) => {
    const {
        dataSource,
        componentProps,
        getFieldValue,
        onUpdateValue
    } = model;

    const options = computed<Array<any>>(() => dataSource);

    return h(NSelect, {
        ...componentProps,
        options: options.value,
        value: getFieldValue(),
        onUpdateValue
    });
}