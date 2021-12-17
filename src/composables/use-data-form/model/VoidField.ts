/*
 * @Author: maggot-code
 * @Date: 2021-12-16 22:25:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 10:42:39
 * @Description: file content
 */
import type { FieldProps } from '../types/Field';

import { Field } from './Field';

class VoidField extends Field {
    constructor(props: FieldProps) {
        super(props);
    }
}

export {
    VoidField
}