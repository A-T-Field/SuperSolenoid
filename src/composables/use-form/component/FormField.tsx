/*
 * @Author: maggot-code
 * @Date: 2021-12-14 15:13:24
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-15 12:55:14
 * @Description: file content
 */
import type { FormFieldSetupProps } from '../types/props';

import { defineComponent, h } from 'vue';
import { fromFieldProps } from '../context/props';

export default defineComponent({
    name: "FormField",
    props: fromFieldProps,
    setup(props: FormFieldSetupProps) {
        return () => h(
            <h1>form field</h1>
        )
    }
})