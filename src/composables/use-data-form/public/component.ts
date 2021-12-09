/*
 * @Author: maggot-code
 * @Date: 2021-12-09 17:28:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-09 17:30:35
 * @Description: file content
 */
import { toRaw } from 'vue';

export const getRawComponent = (props) => {
    return [toRaw(props.component[0]), props.component[1]];
};