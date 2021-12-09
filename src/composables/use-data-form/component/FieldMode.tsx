/*
 * @Author: maggot-code
 * @Date: 2021-12-09 17:08:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-09 18:25:58
 * @Description: file content
 */
import type {
    ExtractPropTypes
} from 'vue';

import {
    h,
    ref,
    defineComponent
} from 'vue';
import { useField } from '../hooks/use-field';
import { NButton } from 'naive-ui';

const modeProps = {} as const;

export type ModeSetupProps = ExtractPropTypes<typeof modeProps>;

export default defineComponent({
    name: "FieldMode",
    // props: modeProps,
    setup(props, { attrs }) {
        const fieldRef = useField();
        const a = ref(0);
        const add = () => {
            a.value++;
            fieldRef.value.setFieldValue(a);
        };
        return () => h(
            <div>
                <h1>{fieldRef.value.name} {fieldRef.value.value}</h1>
                <NButton onClick={() => add()}>{{
                    default: () => h(
                        <p>增加</p>
                    )
                }}</NButton>
            </div>
        )
    }
})