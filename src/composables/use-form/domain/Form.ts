/*
 * @Author: maggot-code
 * @Date: 2021-12-10 15:38:35
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-13 15:31:27
 * @Description: file content
 */
import type { Ref } from 'vue';
import type {
    FormOptions,
    FormFieldes,
    FormValuesType,
    FieldOptions
} from '../type/domain';

import { ref, toRaw, reactive, unref, nextTick } from 'vue';
import { uid } from '@/utils/uid';
import { isNil } from '@/utils/is';
import { FormInst } from 'naive-ui/lib/form/src/interface';
import { default as Share } from './Share';
import { default as Field } from './Field';

class FormModel extends Share {
    protected _formCase: Ref<Nullable<FormInst>> = ref(null);
    protected _fields: FormFieldes = reactive({});
    protected _values: FormValuesType = reactive({});

    constructor(options: Partial<FormOptions>) {
        super(options);
        this.onCreate();
    }

    createField = (options: Partial<FieldOptions>) => {
        const { name } = options;

        const key = name ?? uid();

        if (isNil(this._fields[key])) {
            this._fields[key] = new Field(options, this);
        }

        return unref(this._fields)[key];
    }

    getFormCase = async () => {
        await nextTick();

        return unref(this._formCase);
    }
    setFormCase = (a) => {
        this._formCase.value = a;
    }
    getValues = () => {
        return unref(this._values);
    }
    getValuesIn = (key: string) => {
        return unref(this._values[key]);
    }
    setValuesIn = (key: string, value: any) => {
        this._values[key] = value;
    }

    onCheck = () => {
        return new Promise((resolve, reject) => {
            this.getFormCase().then(usecase => {
                resolve(usecase?.validate());
            }).catch(reject);
        });
    }

    onSubmit = () => {
        return toRaw(this.getValues());
    }
};

export default FormModel;