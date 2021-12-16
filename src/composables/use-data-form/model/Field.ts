/*
 * @Author: maggot-code
 * @Date: 2021-12-16 22:23:51
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 00:51:20
 * @Description: file content
 */
import { FieldProps } from '../types/Field';

import { BaseField } from './BaseField';

class Field extends BaseField {
    constructor(props: FieldProps) {
        super();
        console.log(props);
    }
}

export {
    Field
}