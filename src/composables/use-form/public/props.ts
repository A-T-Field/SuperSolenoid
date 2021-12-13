/*
 * @Author: maggot-code
 * @Date: 2021-12-12 22:14:42
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-13 15:48:35
 * @Description: file content
 */
import type {
    PropType,
} from 'vue';
import type { FieldSetupProps } from '../type/props';

// import { modeType } from '../public/mode';
import { default as FormModel } from '../domain/Form';

export const providerProps = {
    form: {
        type: Object as PropType<FormModel>,
        required: true
    }
} as const;

export const fieldProps = {
    name: {
        type: String,
        required: true
    },
    mode: {
        type: String,
        default: () => "Unknow"
    },
    componentProps: {
        type: Object,
        default: () => ({})
    },
    tips: String,
    describe: String,
    prefix: String,
    suffix: String,
    initialValue: {},
    value: {},
} as const;

export const modeProps = {
    ...fieldProps,
} as const;

export const vesselProps = {
    ...providerProps,
    schema: {
        type: Array as PropType<Array<
            Partial<FieldSetupProps> & {
                name: string
            }
        >>,
        default: () => []
    }
} as const;