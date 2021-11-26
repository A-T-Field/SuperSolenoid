/*
 * @Author: maggot-code
 * @Date: 2021-11-26 15:24:54
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-26 16:10:11
 * @Description: file content
 */
import type { computedProps } from '../types/props';

import { ref, unref, computed, watch, watchEffect } from 'vue';

function usePage(props: computedProps) {
    const itemCountRef = ref(unref(props).itemCount ?? 0);

    const pageNumberRef = ref(unref(props).page ?? 0);

    const getItemCount = computed(() => {
        return unref(itemCountRef);
    });

    const getPageNumber = computed(() => {
        return unref(pageNumberRef);
    });

    const setItemCount = (count: number) => {
        itemCountRef.value = count;
    };

    const setPageNumber = (value: number) => {
        pageNumberRef.value = value;
    };

    const itemCountWatchEffect = watchEffect(() => {
        props.value.itemCount = unref(itemCountRef);
    });

    const pageNumberWatch = watch(
        () => unref(pageNumberRef),
        (nowPage) => {
            console.log('当前页码：');
            console.log(nowPage);
        },
        { immediate: true }
    );

    const pageNumberWatchEffect = watchEffect(() => {
        props.value.page = unref(pageNumberRef);
    });

    return {
        getItemCount,
        getPageNumber,
        setItemCount,
        setPageNumber,
        pageNumberWatch,
        itemCountWatchEffect,
        pageNumberWatchEffect
    }
}

export default usePage;