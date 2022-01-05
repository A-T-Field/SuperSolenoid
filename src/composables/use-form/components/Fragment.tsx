/*
 * @Author: maggot-code
 * @Date: 2022-01-05 13:50:48
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-05 13:52:15
 * @Description: file content
 */
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Fragment",
    setup(props: Record<string, any>, { slots, attrs }) {
        return () => slots?.default?.(attrs);
    }
});