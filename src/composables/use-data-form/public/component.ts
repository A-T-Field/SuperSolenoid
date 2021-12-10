/*
 * @Author: maggot-code
 * @Date: 2021-12-09 17:28:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-10 09:31:51
 * @Description: file content
 */
import type { FieldSetupProps } from '../component/FormField';

import { toRaw } from 'vue';

export const getRawComponent = (props: FieldSetupProps) => {
    return [toRaw(props.component[0]), props.component[1]];
};