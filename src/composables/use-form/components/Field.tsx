/*
 * @Author: maggot-code
 * @Date: 2022-01-10 14:47:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-11 18:29:27
 * @Description: file content
 */
import { h, toRaw } from 'vue';
import { isVoid } from '../utils';
import { Field } from '../model/Field';
import { NInput, NInputNumber, NSelect } from '@/plugins/naive-ui';
import { default as VoidFieldComponent } from './VoidField';

const component = {
    Input: NInput,
    InputNumber: NInputNumber,
    Select: NSelect
}

const FieldComponent = (props: Field) => {
    const [vesselType] = props.vessel;
    const [componentType, componentProps] = props.component;

    const itemComponent = h(component[componentType], {
        ...toRaw(componentProps),
        key: props.designID,
        value: props.value,
        options: props.dataSource,
        onBlur: props.onBlur,
        onFocus: props.onFocus,
        onUpdateValue: props.onUpdateValue
    });

    if (props.hidden) {
        return h([]);
    } else {
        if (isVoid(vesselType)) {
            return itemComponent;
        } else {
            return VoidFieldComponent(props, [itemComponent]);
        }
    }
}

export default FieldComponent;