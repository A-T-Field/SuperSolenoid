/*
 * @Author: maggot-code
 * @Date: 2022-01-05 16:56:55
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-05 16:56:55
 * @Description: file content
 */
import { provide, defineComponent, watch, h } from 'vue'
import {
    FormSymbol,
    FieldSymbol,
    SchemaMarkupSymbol,
    SchemaSymbol,
    SchemaExpressionScopeSymbol,
    SchemaOptionsSymbol,
} from '../shared/context'
import { IProviderProps, DefineComponent } from '../types'
import { useAttach, useInjectionCleaner } from '../hooks'
import { Fragment } from '../shared/fragment'

export default defineComponent({
    name: 'FormProvider',
    inheritAttrs: false,
    props: ['form'],
    setup(props: IProviderProps, { attrs, slots }) {
        const getForm = () => props.form
        const [formRef, checker] = useAttach(getForm())
        watch(
            () => props.form,
            () => (formRef.value = checker(getForm()))
        )

        provide(FormSymbol, formRef)
        useInjectionCleaner([
            FieldSymbol,
            SchemaMarkupSymbol,
            SchemaSymbol,
            SchemaExpressionScopeSymbol,
            SchemaOptionsSymbol,
        ])

        return () => h(Fragment, { attrs }, slots)
    },
}) as DefineComponent<IProviderProps>