/*
 * @Author: maggot-code
 * @Date: 2021-11-24 18:13:48
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-24 18:20:05
 * @Description: file content
 */
import type { computedProps } from '../types/props';

import { ref, unref, computed, watch } from 'vue';

function useLoading(props: computedProps) {
    const loadingRef = ref(unref(props).loading);

    const getLoading = computed(() => unref(loadingRef));

    const setLoading = (loading?: boolean) => {
        loadingRef.value = loading ?? false;
    }

    const loadingWatch = watch(
        () => unref(props).loading,
        setLoading
    );

    return {
        getLoading,
        setLoading,
        loadingWatch
    }
}

export default useLoading;