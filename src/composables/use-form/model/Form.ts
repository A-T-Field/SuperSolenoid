/*
 * @Author: maggot-code
 * @Date: 2021-12-13 20:54:52
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-15 13:00:03
 * @Description: file content
 */
import type {
    FormOptions,
    FormOptionsBase,
    FormVoidTreeMap,
    FormVoidTree
} from '../types/Form';

import { unref, reactive, computed } from 'vue';
import { get, set } from 'lodash-es';
import { Share } from './Share';
import { Field } from './Field';

class Form extends Share {
    protected _voidFormTree: FormVoidTree = reactive({});
    protected _voidFormTreeMap: FormVoidTreeMap = reactive({});

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
            const { children } = target;
            const field = new Field(target, this);

            set(this._voidFormTree, field.path, field);
            this._voidFormTreeMap[field.key] = {
                basePath: field.basePath,
                path: field.path
            };

            if (children && Object.keys(children).length > 0) {
                this.makerVoidFormTree({ schema: children });
            }
        }
    }

    getNodeTree = () => {
        return computed(() => {
            return unref(this._voidFormTree);
        })
    }
    getValues = () => {
        return computed(() => {
            const data = {};

            for (const key in this._voidFormTreeMap) {
                const { basePath, path } = this._voidFormTreeMap[key];
                const target = get(this._voidFormTree, path);
                if (target.isVoid) continue;
                set(data, basePath, unref(target.getFieldValue()));
            }

            return data;
        })
    }
    getFieldMap = (key: string) => {
        return this._voidFormTreeMap[key];
    }
    getField = (key: string) => {
        const { path } = this.getFieldMap(key);
        return get(this._voidFormTree, path);
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