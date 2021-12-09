/*
 * @Author: maggot-code
 * @Date: 2021-12-09 09:30:42
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-09 09:31:51
 * @Description: file content
 */
import { markRaw } from 'vue';

import { createForm } from '../index';

const createRawForm = (...args: Parameters<typeof createForm>) => {
    const form = createForm(...args);
    return markRaw(form);
};

export * from './context';

export { createRawForm as createForm };