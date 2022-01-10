/*
 * @Author: maggot-code
 * @Date: 2022-01-10 14:47:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-10 15:09:21
 * @Description: file content
 */
import { h } from 'vue';
import { Field } from '../model/Field';
import { NFormItemGridItem, NInput, NInputNumber, NSelect } from '@/plugins/naive-ui';

const component = {
    FormItemGridItem: NFormItemGridItem,
    Input: NInput,
    InputNumber: NInputNumber,
    Select: NSelect
}

const FieldComponent = (props: Field) => {
    const [vesselType, vesselProps] = props.vessel;
    const [componentType, componentProps] = props.component;

    const itemComponent = h(component[componentType], {
        ...componentProps,
        value: props.value,
        onBlur: props.onBlur,
        onFocus: props.onFocus,
        onUpdateValue: props.onUpdateValue
    });

    return h(component[vesselType], { ...vesselProps }, {
        default: () => itemComponent
    });
}

export default FieldComponent;