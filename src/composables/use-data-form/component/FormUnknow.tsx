/*
 * @Author: maggot-code
 * @Date: 2021-12-08 16:14:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-10 13:14:16
 * @Description: file content
 */
import {
    h,
    defineComponent
} from 'vue';
import { NTag } from '@/plugins/naive-ui';

export default defineComponent({
    name: "FormUnknow",
    setup(props) {
        return () => h(
            <NTag type="warning">
                {{
                    default: () => 'N/A'
                }}
            </NTag>
        )
    }
})