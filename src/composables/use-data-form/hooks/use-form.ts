/*
 * @Author: maggot-code
 * @Date: 2021-12-17 10:49:24
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 15:03:46
 * @Description: file content
 */
import type { Ref } from 'vue';
import type { FormProps } from '../types/Form';

import { inject, ref } from 'vue';
import { Form } from '../model/Form';
import { FormSymbol } from '../public/context';

export const createForm = (props?: FormProps) => {
    const form = new Form(props ?? {});

    return form;
};

export const useForm = (): Ref<Form> => {
    const form = inject(FormSymbol, ref());

    return form as Ref<Form>;
};