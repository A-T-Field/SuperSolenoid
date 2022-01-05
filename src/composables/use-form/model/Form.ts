/*
 * @Author: maggot-code
 * @Date: 2022-01-03 14:02:58
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-05 10:27:41
 * @Description: file content
 */
import type { IFormProps, ICreatedField } from './types';

import { uid } from '../utils/uid';
import { Share } from './Share';
import { Path } from './Path';
import { Struct } from './Struct';
import { Data } from './Data';
import { Field } from './Field';

class Form extends Share {
    designID = uid();
    displayName = "Form";
    fieldStruct!: Struct;
    fieldData!: Data;

    protected selfProps: IFormProps;

    constructor(props: IFormProps) {
        super();

        this.selfProps = props;

        this.initialization();
        this.onInit();
    }

    protected initialization() {
        this.fieldStruct = new Struct();
        this.fieldData = new Data();
    }

    createdField: ICreatedField = (props) => {
        const field = new Field(props, this);
        console.log(field);

        return field;
    }

    onInit = () => {
        this.initialized.value = true;
    }
    onMount = () => {
        this.mounted.value = true;
    }
    onUnmount = () => {
        this.unmounted.value = true;
    }
}

export {
    Form
}