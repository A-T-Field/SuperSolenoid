/*
 * @Author: maggot-code
 * @Date: 2022-01-04 15:21:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-05 15:59:18
 * @Description: file content
 */
import { defineComponent, h } from 'vue';
import { useForm } from '../hooks/use-form';
import { NGridItem } from '@/plugins/naive-ui';

export default defineComponent({
    name: "FormField",
    setup() {
        const formRef = useForm();
        console.log(formRef);

        return () => h(
            <h1>field</h1>
        )
    }
});