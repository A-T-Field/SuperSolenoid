/*
 * @Author: maggot-code
 * @Date: 2021-12-13 20:54:52
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-14 15:01:38
 * @Description: file content
 */
import type { FormOptions, FormOptionsBase } from '../types/Form';

import { unref, reactive, computed } from 'vue';
import { set } from 'lodash-es';
import { Share } from './Share';
import { Field } from './Field';

class Form extends Share {
    protected _voidFormTree: Record<string, Field> = reactive({});

    constructor(options: Partial<FormOptions>) {
        super(options);
        this.initialization(options);
        this.makerVoidFormTree(options);
    }

    protected initialization(options: Partial<FormOptionsBase>) { }
    protected makerVoidFormTree(options: Partial<FormOptions>) {
        const schema = options.schema ?? {};

        for (const member in schema) {
            const target = schema[member];

            const { path, children } = target;

            this._voidFormTree[path!] = new Field(target, this);

            if (children && Object.keys(children).length > 0) {
                this.makerVoidFormTree({ schema: children });
            }
        }
    }

    getValues = () => {
        return computed(() => {
            const data = {};

            for (const path in this._voidFormTree) {
                const { getFieldValue } = unref(this._voidFormTree[path]);
                set(data, path, unref(getFieldValue()));
            }

            return data;
        })
    }
    getField = (path: string) => {
        return this._voidFormTree[path];
    }
    getValuesIn = (path: string) => {
        return this.getField(path).getFieldValue();
    }
    setValuesIn = (path: string, value: any) => {
        this.getField(path).setFieldValue(value);
    }
}

export {
    Form
}