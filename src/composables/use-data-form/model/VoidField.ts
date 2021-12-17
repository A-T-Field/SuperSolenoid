/*
 * @Author: maggot-code
 * @Date: 2021-12-16 22:25:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 11:30:34
 * @Description: file content
 */
import type { FieldProps } from '../types/Field';

import { Field } from './Field';
import { Form } from './Form';


class VoidField extends Field {
    displayName = "VoidField";

    constructor(props: FieldProps, form: Form) {
        super(props, form);
    }
}

export {
    VoidField
}