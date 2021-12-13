/*
 * @Author: maggot-code
 * @Date: 2021-12-12 22:39:26
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-13 14:22:39
 * @Description: file content
 */
import { h, unref, toRaw, inject, defineComponent } from 'vue';
// import {useForm} from '../hooks/use-form';
import { modeProps } from '../public/props';
import { FieldSymbol } from '../public/context';

export default defineComponent({
    name: "FieldMode",
    props: modeProps,
    setup(props, { attrs }) {
        const fieldRef = inject(FieldSymbol);

        return () => h(toRaw(unref(fieldRef)?.component[0]), {
            ...unref(fieldRef),
            ...unref(fieldRef)?.component[1],
            value: unref(fieldRef)?.value
        })
    }
});