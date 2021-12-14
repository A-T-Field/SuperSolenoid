/*
 * @Author: maggot-code
 * @Date: 2021-12-14 16:38:05
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-14 16:40:07
 * @Description: file content
 */
import { defineComponent } from 'vue';

export default defineComponent({
    name: "FormPatch",
    setup(props: Record<string, any>, { attrs, slots }) {
        return () => slots?.default?.(attrs);
    }
})