/*
 * @Author: maggot-code
 * @Date: 2021-12-04 14:10:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-08 16:36:36
 * @Description: file content
 */
import type { FormOptions } from './domain/type';

import { default as FormModel } from './domain/Form';

const createForm = (options?: FormOptions) => {
    return new FormModel(options ?? {});
}

export {
    createForm
}