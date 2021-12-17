/*
 * @Author: maggot-code
 * @Date: 2021-12-16 17:24:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 10:43:09
 * @Description: file content
 */
import { Share } from './Share';
// import { Field } from './Field';
// import { VoidField } from './VoidField';

class Form extends Share {
    constructor(props: any) {
        super(props);
    }

    createField = () => { }
    createVoidField = () => { }
}

export {
    Form
}