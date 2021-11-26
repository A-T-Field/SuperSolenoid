/*
 * @Author: maggot-code
 * @Date: 2021-11-26 15:25:42
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-26 15:34:02
 * @Description: file content
 */
import type { computedProps } from '../types/props';

import { ref, unref, computed, watchEffect } from 'vue';

function usePageSizes(props: computedProps) {
    const pageSizeRef = ref(unref(props).pageSize);

    const getPageSize = computed(() => {
        return unref(pageSizeRef);
    });

    const setPageSize = (value: number) => {
        pageSizeRef.value = value;
    };

    const pageSizeWatchEffect = watchEffect(() => {
        props.value.pageSize = unref(pageSizeRef);
    });

    return {
        getPageSize,
        setPageSize,
        pageSizeWatchEffect
    }
}

export default usePageSizes;