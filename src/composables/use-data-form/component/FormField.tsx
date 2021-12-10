/*
 * @Author: maggot-code
 * @Date: 2021-12-08 16:15:05
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-10 11:31:56
 * @Description: file content
 */
import type {
    ExtractPropTypes
} from 'vue';

import {
    h,
    provide,
    defineComponent,
    toRaw
} from 'vue';
import { fieldProps } from '../props/field';
import { isNil } from '@/utils/is';
import { NFormItem, NTooltip } from 'naive-ui';
import { useAttach } from '../hooks/use-attach';
import { useForm } from '../hooks/use-form';
import { FieldSymbol } from '../public';
import FieldMode from './FieldMode';
import FormUnknow from './FormUnknow';
import { default as IconImg } from '@/components/icon-img';

const FormFieldClass = {
    field: "ATF-form-field",
    prefix: "ATF-form-field-prefix",
    suffix: "ATF-form-field-suffix",
    body: "ATF-form-field-body",
    explain: "ATF-form-field-body-explain",
    label: "ATF-form-field-body-label",
    title: "ATF-field-body-label-title",
    tips: "ATF-field-body-label-tips"
};

// component 优先级高于 mode
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
            <span>
                <span class={FormFieldClass.title} style={{
                    paddingRight: '6px'
                }}>标题</span>
                <NTooltip trigger='hover'>
                    {{
                        trigger: () => h(
                            <IconImg name="ATF-question-circle"></IconImg>
                        ),
                        default: () => h(
                            <span>提示</span>
                        )
                    }}
                </NTooltip>
                <span>：</span>
            </span>
        );

        const fieldMode = () => {
            if (isNil(props.component[0]) && props.mode === 'unknow') {
                return h(<FormUnknow></FormUnknow>);
            }

            const context = {
                ...toRaw(props),
                ...toRaw(attrs)
            }

            return h(
                <div class={FormFieldClass.field} style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                }}>
                    <div class={FormFieldClass.body} style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <span class={FormFieldClass.prefix} style={{
                            flexShrink: 1,
                            paddingRight: '12px'
                        }}>前缀</span>

                        <FieldMode style={{
                            flex: 1,
                            flexShrink: 0
                        }} {...context}></FieldMode>

                        <span class={FormFieldClass.suffix} style={{
                            flexShrink: 1,
                            paddingLeft: '12px'
                        }}>后缀</span>
                    </div>
                    <p class={FormFieldClass.explain}>说明</p>
                </div>
            );
        }

        const context = {
            ...attrs,
            ...props.component[1],
            path: fieldRef.value.path
        }

        return () => h(
            <NFormItem {...context}>
                {{
                    label: fieldLabel,
                    default: fieldMode,
                }}
            </NFormItem>
        );
    }
})