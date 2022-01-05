/*
 * @Author: maggot-code
 * @Date: 2022-01-05 16:20:24
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-05 16:44:26
 * @Description: file content
 */
import { markRaw, defineComponent, h } from 'vue';
import { isFn, isStr, FormPath, each } from '@formily/shared';
import { isVoidField, GeneralField } from '@formily/core';
import { observer } from '@formily/reactive-vue';
import { useField } from '../hooks';

import type {
    VueComponent,
    IComponentMapper,
    IStateMapper,
    VueComponentProps,
} from '../types';

export function mapProps<T extends VueComponent = VueComponent>(
    ...args: IStateMapper<VueComponentProps<T>>[]
) {
    return (target: T) => {
        return observer(
            defineComponent<VueComponentProps<T>>({
                // listeners is needed for vue2
                setup(props, { attrs, slots, listeners }: Record<string, any>) {
                    const fieldRef = useField()

                    const transform = (
                        input: VueComponentProps<T>,
                        field: GeneralField
                    ) =>
                        args.reduce((props, mapper) => {
                            if (isFn(mapper)) {
                                props = Object.assign(props, mapper(props, field))
                            } else {
                                each(mapper, (to, extract) => {
                                    const extractValue = FormPath.getIn(field, extract)
                                    const targetValue = isStr(to) ? to : extract
                                    if (extract === 'value') {
                                        if (to !== extract) {
                                            delete props['value']
                                        }
                                    }
                                    FormPath.setIn(props, targetValue, extractValue)
                                })
                            }
                            return props
                        }, input)

                    return () => {
                        const newAttrs = fieldRef.value
                            ? transform({ ...attrs } as VueComponentProps<T>, fieldRef.value)
                            : { ...attrs }
                        return h(
                            target,
                            {
                                attrs: {
                                    ...newAttrs,
                                },
                                on: listeners,
                            },
                            slots
                        )
                    }
                },
            })
        )
    }
}

export function connect<T extends VueComponent>(
    target: T,
    ...args: IComponentMapper[]
): T {
    const Component = args.reduce((target: VueComponent, mapper) => {
        return mapper(target)
    }, target)
    const functionalComponent = defineComponent({
        setup(props, { attrs, slots }) {
            return () => {
                return h(Component, { props, attrs }, slots)
            }
        },
    })
    return markRaw(functionalComponent) as T
}