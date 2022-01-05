/*
 * @Author: maggot-code
 * @Date: 2022-01-04 15:21:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-05 16:02:24
 * @Description: file content
 */
import { defineComponent, h } from 'vue';
import { useForm } from '../hooks/use-form';
import { NGrid } from '@/plugins/naive-ui';

export default defineComponent({
    name: "FormVoidField",
    setup(props, { slots }) {
        const formRef = useForm();
        console.log(formRef);

        const body = {
            default: () => [
                slots?.default?.()
            ]
        }
        console.log(body.default());


        return () => h(
            <NGrid>{body}</NGrid>
        )
    }
})