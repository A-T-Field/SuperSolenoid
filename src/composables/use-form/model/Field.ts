/*
 * @Author: maggot-code
 * @Date: 2021-12-13 20:58:29
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-13 23:34:15
 * @Description: file content
 */
import type { FieldOptions } from '../types/Field';

import { Share } from './Share';

class Field extends Share {
    constructor(options: Partial<FieldOptions>) {
        super(options);
    }
}

export {
    Field
}