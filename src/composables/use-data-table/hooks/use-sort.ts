/*
 * @Author: maggot-code
 * @Date: 2021-11-25 13:07:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-25 13:54:01
 * @Description: file content
 */
import type { computedProps, sortersType } from '../types/props';

import { ref, unref, computed } from 'vue';

function useSort(props: computedProps) {
    const sortersRef = ref<sortersType>([]);

    const getSorters = computed(() => {
        return unref(sortersRef);
    });

    const setSorters = (soters: sortersType) => {
        sortersRef.value = soters;
    };

    return {
        getSorters,
        setSorters,
    }
}

export default useSort;