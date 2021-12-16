/*
 * @Author: maggot-code
 * @Date: 2021-12-16 17:24:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-16 22:34:22
 * @Description: file content
 */
import { Field } from './Field';
import { VoidField } from './VoidField';

class Form {
    createField = () => {
        new Field();
    }
    createVoidField = () => {
        new VoidField();
    }
}

export {
    Form
}