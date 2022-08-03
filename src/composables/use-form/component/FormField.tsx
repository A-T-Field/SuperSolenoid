/*
 * @Author: maggot-code
 * @Date: 2021-12-12 22:29:41
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-13 15:49:30
 * @Description: file content
 */
import type { Ref } from 'vue';
import type { FieldSetupProps } from '../type/props';

import {
    h,
    unref,
    toRaw,
    provide,
    defineComponent,
} from 'vue';
import { fieldProps } from '../public/props';
import { modeSelect } from '../public/mode';
import { useAttach } from '../hooks/use-attach';
import { useForm } from '../hooks/use-form';
import { FieldSymbol } from '../public/context';
import { FormItemProps } from '../type/domain';
import { NFormItem, NTooltip } from '@/plugins/naive-ui';
import { default as Field } from '../domain/Field';
import { default as FormUnknow } from './FormUnknow';
import { default as FieldMode } from './FieldMode';
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

const buildFieldLabel = (attrs: FormItemProps, fieldRef: Ref<Field>) => {
    const { name, optionExtends, tips, showTips } = unref(fieldRef);
    const style = { paddingRight: '6px' };

    return () => h(
        <span>
            <span class={FormFieldClass.title} style={style}>{attrs.label ?? name}</span>
            {
                showTips() && <NTooltip trigger='hover'>
                    {{
                        trigger: () => h(
                            <IconImg name="ATF-question-circle"></IconImg>
                        ),
                        default: () => h(
                            <span>{tips}</span>
                        )
                    }}
                </NTooltip>
            }
            {unref(optionExtends).showColon && <span>：</span>}
        </span>
    );
};

const buildFieldMode = (props: FieldSetupProps, attrs: any, fieldRef: Ref<Field>) => {
    const { prefix, suffix, describe, showPrefix, showSuffix, showDescribe } = unref(fieldRef);

    const context = {
        ...toRaw(props),
        ...toRaw(attrs)
    };
    return () => h(
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
                {
                    showPrefix() && <span class={FormFieldClass.prefix} style={{
                        flexShrink: 1,
                        paddingRight: '12px'
                    }}>{prefix}</span>
                }

                <FieldMode style={{
                    flex: 1,
                    flexShrink: 0
                }} {...context}></FieldMode>

                {
                    showSuffix() && <span class={FormFieldClass.suffix} style={{
                        flexShrink: 1,
                        paddingLeft: '12px'
                    }}>{suffix}</span>
                }
            </div>
            {showDescribe() && <p class={FormFieldClass.explain}>{describe}</p>}
        </div>
    );
};

export default defineComponent({
    name: "FormField",
    props: fieldProps,
    setup(props, { attrs }) {
        const renderComponent = modeSelect[props.mode];

        if (!props.name || !renderComponent) return () => h(<FormUnknow></FormUnknow>);

        const formRef = useForm();

        const createField = () => formRef.value.createField({
            ...props,
            component: [renderComponent, props.componentProps]
        });

        const [fieldRef] = useAttach(createField());

        provide(FieldSymbol, fieldRef);

        return () => h(
            <NFormItem {...attrs} path={unref(fieldRef).path}>
                {{
                    label: buildFieldLabel(attrs, fieldRef),
                    default: buildFieldMode(props, attrs, fieldRef),
                }}
            </NFormItem>
        );
    }
});