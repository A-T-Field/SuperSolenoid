/*
 * @Author: maggot-code
 * @Date: 2022-01-05 17:05:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-05 17:13:40
 * @Description: file content
 */
import { provide, defineComponent, watch, computed, h } from 'vue'
import { useAttach, useField, useForm } from '../hooks'
import { FieldSymbol } from '../shared/context'
import ReactiveField from './ReactiveField'
import { getRawComponent } from '../utils/getRawComponent'

import type { IFieldProps, DefineComponent } from '../types'

export default defineComponent({
    name: 'Field',
    props: [
        'name',
        'basePath',
        'title',
        'description',
        'value',
        'initialValue',
        'required',
        'display',
        'pattern',
        'hidden',
        'visible',
        'editable',
        'disabled',
        'readOnly',
        'readPretty',
        'dataSource',
        'validateFirst',
        'validator',
        'decorator',
        'component',
        'reactions',
        'content',
        'data',
    ],
    setup(props: IFieldProps, { slots }) {
        const formRef = useForm()
        const parentRef = useField()

        const basePath = computed(() =>
            props.basePath !== undefined ? props.basePath : parentRef?.value?.address
        )
        const createField = () =>
            formRef.value.createField({
                ...props,
                basePath: basePath.value,
                ...getRawComponent(props),
            })
        const [fieldRef, checker] = useAttach(createField())
        watch(
            () => props,
            () => (fieldRef.value = checker(createField())),
            { deep: true }
        )
        watch([formRef, parentRef], () => (fieldRef.value = checker(createField())))

        provide(FieldSymbol, fieldRef)

        return () => {
            const field = fieldRef.value
            const componentData = {
                props: {
                    field,
                },
            }
            const children: Record<string, any> = {
                ...slots,
            }
            if (slots.default) {
                children.default = () =>
                    slots?.default?.({
                        field,
                        form: field.form,
                    })
            }
            return h(ReactiveField, componentData, children)
        }
    },
}) as DefineComponent<IFieldProps>