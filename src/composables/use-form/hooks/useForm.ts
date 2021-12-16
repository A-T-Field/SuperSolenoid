/*
 * @Author: maggot-code
 * @Date: 2021-12-16 15:52:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-16 15:56:02
 * @Description: file content
 */
import type { FormProps } from '../types/Form';

import { FormModel } from '../model/Form';

export const useForm = (props: FormProps) => {
    const form = new FormModel(props ?? {});

    return form;
};