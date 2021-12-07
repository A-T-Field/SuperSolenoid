/*
 * @Author: maggot-code
 * @Date: 2021-12-07 09:29:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-07 23:10:31
 * @Description: file content
 */
import type { FormOptions } from '../domain/type';

import {
    useValues,
    useFields,
    useComponent
} from '../index';

import { default as FormModel } from '../domain/Form';

export const useForm = (options?: FormOptions) => {
    const form = new FormModel(options ?? {});

    return {
        form,
        ...useValues(form),
        ...useFields(form),
        ...useComponent(form)
    }
}