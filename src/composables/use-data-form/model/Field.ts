/*
 * @Author: maggot-code
 * @Date: 2021-12-16 22:23:51
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 00:54:22
 * @Description: file content
 */
import { FieldProps } from '../types/Field';

import { BaseField } from './BaseField';

class Field extends BaseField {
    constructor(props: FieldProps) {
        super(props);
        console.log(props);
    }
}

export {
    Field
}