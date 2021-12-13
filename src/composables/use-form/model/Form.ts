/*
 * @Author: maggot-code
 * @Date: 2021-12-13 20:54:52
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-13 22:53:04
 * @Description: file content
 */
import type { FormOptions } from '../types/Form';

import { Share } from './Share';
// import { Field } from './Field';

class Form extends Share {
    constructor(options: Partial<FormOptions>) {
        super(options);
    }
}

export {
    Form
}