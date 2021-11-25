/*
 * @Author: maggot-code
 * @Date: 2021-11-25 10:00:06
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-25 14:05:42
 * @Description: file content
 */
import type { computedProps } from '../types/props';

import { ref, unref, computed, watch } from 'vue';
import { isArray } from '@/utils/is';

function handlerDataSource(props: computedProps) {
    const dataSourceRef = ref(unref(props).data);

    const getDataSource = computed(() => {
        const data = unref(dataSourceRef);

        if (!isArray(data) || data.length <= 0) return [];

        return data;
    });

    const setDataSource = (data?: Array<any>) => {
        dataSourceRef.value = data ?? [];
    };

    const dataSourceWatch = watch(
        () => unref(props).data,
        () => {
            dataSourceRef.value = unref(props).data ?? [];
        },
        { immediate: true }
    );

    return {
        getDataSource,
        setDataSource,
        dataSourceWatch
    }
}

function handlerRowKey(props: computedProps) {
    const getRowKey = computed(() => {
        const key = unref(props).rowKey;
        return (rowData) => {
            return rowData[key ?? ""] ?? Date.now()
        }
    });

    return {
        getRowKey
    }
}

function useDataSource(props: computedProps) {
    return {
        ...handlerDataSource(props),
        ...handlerRowKey(props)
    }
}

export default useDataSource;