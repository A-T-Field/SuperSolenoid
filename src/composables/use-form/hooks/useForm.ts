/*
 * @Author: maggot-code
 * @Date: 2021-12-14 15:10:48
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-14 15:12:10
 * @Description: file content
 */
import type { Ref } from 'vue';

import { inject, ref } from 'vue';
import { Form } from '../model/Form';
import { FormSymbol } from '../context/symbol';

export const useForm = <T = Form>(): Ref<T> => {
    return inject(FormSymbol, ref()) as unknown as Ref<T>;
}