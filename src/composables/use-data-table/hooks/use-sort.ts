/*
 * @Author: maggot-code
 * @Date: 2021-11-25 13:07:27
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-25 18:25:04
 * @Description: file content
 */
import type { computedProps, SortStateExpand } from '../types/props';

import { ref, watch, computed } from 'vue';

function useSort(props: computedProps) {
    const sortStatesRef = ref([]);

    const sortKeyMapOrderRef = computed(() => {
        return sortStatesRef.value.reduce((result, { columnKey, order, sorter }: SortStateExpand) => {
            // const key = sorter.sortName ? sorter.sortName : columnKey;
            result[columnKey] = order;
            if (sorter.sortName) result[sorter.sortName] = order;
            return result;
        }, {});
    });

    watch(sortKeyMapOrderRef, (a) => {
        console.log(a);
    })

    return {
        sortStatesRef,
        sortKeyMapOrderRef
    }
}

export default useSort;