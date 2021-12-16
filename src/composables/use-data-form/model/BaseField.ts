/*
 * @Author: maggot-code
 * @Date: 2021-12-16 22:23:28
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 00:55:38
 * @Description: file content
 */
import { FieldProps } from '../types/Field';

import { Share } from './Share';

class BaseField extends Share {
    constructor(props: FieldProps) {
        super(props);
        console.log(props);
    }
}

export {
    BaseField
}