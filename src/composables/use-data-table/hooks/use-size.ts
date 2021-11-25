/*
 * @Author: maggot-code
 * @Date: 2021-11-25 09:27:58
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-25 09:34:33
 * @Description: file content
 */
import type { computedProps } from '../types/props';

import { ref, unref, computed } from 'vue';

function handlerMaxHeight(props: computedProps) {
    const maxHeightRef = ref(unref(props).maxHeight);

    const getMaxHeight = computed(() => unref(maxHeightRef));

    const setMaxHeight = (height?: number) => {
        maxHeightRef.value = height ?? 0;
    }

    return {
        getMaxHeight,
        setMaxHeight
    }
}

function useSize(props: computedProps) {
    return {
        ...handlerMaxHeight(props)
    }
}

export default useSize;