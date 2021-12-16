/*
 * @Author: maggot-code
 * @Date: 2021-12-16 10:33:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-16 17:05:14
 * @Description: file content
 */
import type { FormGraph } from '../types/Form';
import type { FieldVoidProps } from '../types/Field';

import { unref, computed, reactive } from 'vue';
import { BaseField } from '../model/BaseField';
import { FormModel } from '../model/Form';

class VoidField extends BaseField {
    protected _form!: FormModel;
    protected _children: FormGraph = reactive({});

    constructor(props: Partial<FieldVoidProps>, form: FormModel) {
        super(props);
        this._form = form;
        this._children = props.children as FormGraph ?? {};
    }

    get children() {
        return computed(() => unref(this._children));
    }
}

export {
    VoidField
}