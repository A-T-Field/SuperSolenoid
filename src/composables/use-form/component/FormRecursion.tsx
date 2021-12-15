/*
 * @Author: maggot-code
 * @Date: 2021-12-14 16:49:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-15 12:54:51
 * @Description: file content
 */
import type { FormRecursionSetupProps } from '../types/props';

import { defineComponent, h } from 'vue';
import { formRecursionProps } from '../context/props';

export default defineComponent({
    name: 'FormRecursion',
    props: formRecursionProps,
    setup(props: FormRecursionSetupProps) {
        return () => h(
            <h1>from recursion</h1>
        )
    }
});