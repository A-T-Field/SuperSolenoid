/*
 * @Author: maggot-code
 * @Date: 2022-01-03 14:03:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-07 16:25:30
 * @Description: file content
 */
import { reactive } from 'vue';
import { Form } from './Form';

class Data {
    protected form: Form;
    // protected dataWatch: WatchStopHandle;
    protected dataValues = reactive({});
    protected dataDefaultValues = reactive({});

    constructor(form: Form) {
        this.form = form;
    }

    setDataValue(key: string | number, val: any) {
        this.dataValues[key] = val;
    }
    setDataDefaultValue(key: string | number, val: any) {
        this.dataDefaultValues[key] = val;
    }

    destroy() {
        // this.dataWatch();
    }
}

export {
    Data
}