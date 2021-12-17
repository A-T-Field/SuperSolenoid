/*
 * @Author: maggot-code
 * @Date: 2021-12-17 10:49:24
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 10:50:55
 * @Description: file content
 */
import type { FormProps } from '../types/Form';

import { Form } from '../model/Form';

export const useForm = (props?: FormProps) => {
    const form = new Form(props ?? {});

    return form;
};