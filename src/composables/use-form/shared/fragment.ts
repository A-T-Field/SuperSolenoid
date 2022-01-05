/*
 * @Author: maggot-code
 * @Date: 2022-01-05 16:53:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-05 16:56:15
 * @Description: file content
 */
import { defineComponent } from 'vue';

export const Fragment = defineComponent({
    name: "Fragment",
    setup(props: Record<string, any>, { attrs, slots }) {
        return () => slots?.default?.(attrs)
    }
})