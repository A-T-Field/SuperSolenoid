/*
 * @Author: maggot-code
 * @Date: 2021-11-25 13:07:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-29 16:13:34
 * @Description: file content
 */
import type { computedProps, sortersType, SortKeyType, SortStateExpand } from '../types/props';

import { ref, unref, computed } from 'vue';
import { isBoolean } from '@/utils/is';

const filterFalseSort = (sortKeyMap: SortKeyType): SortKeyType => {
    const sortKey = {};

    for (const key in sortKeyMap) {
        if (!isBoolean(sortKeyMap[key])) sortKey[key] = sortKeyMap[key]
    }

    return sortKey;
}

const handlerSortKeyMap = (result: SortKeyType, { columnKey, order, sorter }: SortStateExpand) => {
    result[sorter.sortName ?? columnKey] = order;

    return result;
}

function useSort(props: computedProps) {
    const sortStatesRef = ref<sortersType>([]);

    const setSortStates = (sortState: any) => {
        sortStatesRef.value = [].concat(sortState);
    }

    const sortKeyMapOrderRef = computed(() => {
        return sortStatesRef.value.reduce(handlerSortKeyMap, {});
    });

    const getSortKeyMapOrderRef = computed(() => {
        return filterFalseSort(unref(sortKeyMapOrderRef));
    });

    return {
        getSortKeyMapOrderRef,
        sortKeyMapOrderRef,
        setSortStates
    }
}

export default useSort;