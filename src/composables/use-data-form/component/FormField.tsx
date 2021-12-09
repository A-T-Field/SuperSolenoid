/*
 * @Author: maggot-code
 * @Date: 2021-12-08 16:15:05
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-09 18:45:21
 * @Description: file content
 */
import type {
    PropType,
    DefineComponent,
    ExtractPropTypes
} from 'vue';
import type {
    FieldComponent
} from '../domain/type';

import {
    h,
    provide,
    defineComponent
} from 'vue';
import { NFormItem } from 'naive-ui';
import { useAttach } from '../hooks/use-attach';
import { useForm } from '../hooks/use-form';
import { FieldSymbol } from '../public';
import FieldMode from './FieldMode';
import FormUnknow from './FormUnknow';

const FormFieldClass = {
    field: "form-field",
    prefix: "form-field-prefix",
    suffix: "form-field-suffix",
    body: "form-field-body",
    explain: "form-field-body-explain",
    label: "form-field-body-label",
    title: "field-body-label-title",
    tips: "field-body-label-tips"
};

const fieldProps = {
    name: {
        type: String,
        required: true
    },
    mode: {
        type: String,
        default: "unknow"
    },
    value: {},
    component: {
        type: Array as PropType<
            FieldComponent<DefineComponent, any>
        >,
        default: () => []
    }
} as const;

export type FieldSetupProps = ExtractPropTypes<typeof fieldProps>;

export default defineComponent({
    name: "FormField",
    props: fieldProps,
    setup(props, { attrs }) {
        if (!props.name) return () => h(<FormUnknow></FormUnknow>);

        const formRef = useForm();

        const createField = () => formRef.value.createField(props);

        const [fieldRef] = useAttach(createField());

        provide(FieldSymbol, fieldRef);

        const fieldLabel = () => h(
            <p>
                <span class={FormFieldClass.title}>标题</span>
                <span class={FormFieldClass.tips}>提示</span>
            </p>
        );

        const fieldMode = () => {
            if (
                props.mode === 'unknow'
            ) return h(<FormUnknow></FormUnknow>);

            return h(<FieldMode></FieldMode>);
        }

        return () => h(
            <div class={FormFieldClass.field}>
                <h1 class={FormFieldClass.prefix}>前缀</h1>
                <div class={FormFieldClass.body}>
                    <NFormItem {...attrs}>
                        {{
                            default: fieldMode,
                            label: fieldLabel,
                        }}
                    </NFormItem>
                    <p class={FormFieldClass.explain}>说明</p>
                </div>
                <h1 class={FormFieldClass.suffix}>后缀</h1>
            </div>
        );
    }
})