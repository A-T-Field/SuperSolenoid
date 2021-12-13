/*
 * @Author: maggot-code
 * @Date: 2021-11-25 09:35:21
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-26 14:26:16
 * @Description: file content
 */
import type { computedProps } from '../types/props';

import { ref, unref, watch } from 'vue';

interface UseElementOptions {
    setMaxHeight: (height?: number) => void
}

function computeHeight(element?: HTMLElement): number {
    const parent = element?.parentElement;

    return parent?.clientHeight ?? 0;
}

function useElement(props: computedProps, options: UseElementOptions) {
    const { setMaxHeight } = options;

    const tableElRef = ref<ComponentRef>(null);

    const maxOffset = unref(props)?.usePages ? 130 : 90;

    const tableElWatch = watch(tableElRef, (element) => {
        const height = computeHeight(element?.$el);

        const maxHeight = height - maxOffset;

        setMaxHeight(maxHeight <= 0 ? 0 : maxHeight);
    });

    return {
        tableElRef,
        tableElWatch
    }
}

export default useElement;