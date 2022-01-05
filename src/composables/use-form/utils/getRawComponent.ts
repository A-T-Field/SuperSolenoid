/*
 * @Author: maggot-code
 * @Date: 2022-01-05 16:58:48
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-05 16:58:48
 * @Description: file content
 */
import { IFieldProps, VueComponent } from '../types';
import { toRaw } from 'vue';

export const getRawComponent = (
    props: IFieldProps<VueComponent, VueComponent>
) => {
    const { component, decorator } = props
    let newComponent: typeof props.component
    let newDecorator: typeof props.component
    if (Array.isArray(component)) {
        newComponent = [toRaw(component[0]), component[1]]
    }
    if (Array.isArray(decorator)) {
        newDecorator = [toRaw(decorator[0]), decorator[1]]
    }
    return { component: newComponent, decorator: newDecorator }
}