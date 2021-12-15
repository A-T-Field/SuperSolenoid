/*
 * @Author: maggot-code
 * @Date: 2021-12-14 15:13:24
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-14 18:34:52
 * @Description: file content
 */
import type { FormFieldSetupProps } from '../types/props';

import { defineComponent, h, unref } from 'vue';
import { fromFieldProps } from '../context/props';

export default defineComponent({
    name: "FormField",
    props: fromFieldProps,
    setup(props: FormFieldSetupProps) {
        console.log(props.field);
        const inputa = (v) => {
            const { data } = v;
            const oldV = unref(props.field.getFieldValue());
            const newV = oldV ? `${oldV}${data}` : data;
            props.field.setFieldValue(newV);
        }
        return () => h(
            <div>
                <h1>{props.field.label}：</h1>
                <input
                    type="text"
                    value={unref(props.field.getFieldValue())}
                    onInput={(e) => inputa(e)}
                />
            </div>
        )
    }
})