/*
 * @Author: maggot-code
 * @Date: 2022-01-03 14:02:58
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-03 23:07:58
 * @Description: file content
 */
import type { IFormProps, IFieldProps } from './types';

import { uid } from '../utils/uid';
import { Share } from './Share';
import { Field } from './Field';

class Form extends Share {
    displayName = "Form";
    designID = uid();

    constructor(props?: IFormProps) {
        super(props);
    }

    createField = (props: IFieldProps) => {
        const field = new Field(props, this);
        console.log(field);
    }
}

export {
    Form
}