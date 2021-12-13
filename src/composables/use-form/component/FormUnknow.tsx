/*
 * @Author: maggot-code
 * @Date: 2021-12-12 22:34:19
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-12 22:34:20
 * @Description: file content
 */
import { h, defineComponent } from 'vue';
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