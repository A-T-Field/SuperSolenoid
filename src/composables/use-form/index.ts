/*
 * @Author: maggot-code
 * @Date: 2021-12-10 15:23:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-12 22:48:36
 * @Description: file content
 */
import type { FormOptions } from './type/domain';

import { default as FormModel } from './domain/Form';

export const createForm = (options?: Partial<FormOptions>) => {
    return new FormModel(options ?? {});
};