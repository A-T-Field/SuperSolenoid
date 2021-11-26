/*
 * @Author: maggot-code
 * @Date: 2021-11-26 15:25:42
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-26 16:10:34
 * @Description: file content
 */
import type { ComputedRef } from 'vue';
import type { computedProps } from '../types/props';

import { ref, unref, computed, watch, watchEffect } from 'vue';

interface UsePageSizesOptions {
    count: ComputedRef<number>;
    page: ComputedRef<number>;
    setPageNumber: (value: number) => void
}

function usePageSizes(props: computedProps, options: UsePageSizesOptions) {
    const { count, page, setPageNumber } = options;

    const pageSizeRef = ref(unref(props).pageSize ?? 0);

    const getPageSize = computed(() => {
        return unref(pageSizeRef);
    });

    const setPageSize = (value: number) => {
        pageSizeRef.value = value;
    };

    const pageSizeWatch = watch(
        () => unref(pageSizeRef),
        (nowPageSize) => {
            console.log('每页条数：');
            console.log(nowPageSize);

            const minPage = Math.floor(unref(count) / nowPageSize);
            minPage < unref(page) && setPageNumber(1);
        },
        { immediate: true }
    );

    const pageSizeWatchEffect = watchEffect(() => {
        props.value.pageSize = unref(pageSizeRef);
    });

    return {
        getPageSize,
        setPageSize,
        pageSizeWatch,
        pageSizeWatchEffect
    }
}

export default usePageSizes;