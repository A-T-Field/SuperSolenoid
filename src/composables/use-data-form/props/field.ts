/*
 * @Author: maggot-code
 * @Date: 2021-12-10 09:45:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-10 09:47:38
 * @Description: file content
 */
import type {
    PropType,
    DefineComponent,
} from 'vue';
import type {
    FieldComponent
} from '../domain/type';

export const fieldProps = {
    name: {
        type: String,
        required: true
    },
    value: {},
    mode: {
        type: String,
        default: "unknow"
    },
    component: {
        type: Array as PropType<
            FieldComponent<DefineComponent, any>
        >,
        default: () => []
    }
} as const;