/*
 * @Author: maggot-code
 * @Date: 2021-12-07 17:30:04
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-07 23:09:59
 * @Description: file content
 */
import type { FieldOptions } from '../domain/type';

import { default as FormModel } from '../domain/Form';

export const useFields = (form: FormModel) => {
    const createField = (props?: FieldOptions) => {
        return form.createField(props ?? {});
    }

    return {
        createField
    };
}