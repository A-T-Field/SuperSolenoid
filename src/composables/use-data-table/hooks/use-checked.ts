/*
 * @Author: maggot-code
 * @Date: 2021-11-26 11:05:55
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-29 13:21:47
 * @Description: file content
 */
import type { ComputedRef } from 'vue';
import type { dataType, computedProps, CheckKeyType } from '../types/props';

import { ref, unref, toRaw, computed, watch } from 'vue';

interface UseCheckedOptions {
    rowKey: ComputedRef<string | undefined>;
    data: ComputedRef<dataType>;
};

function filterCheckedData(options: UseCheckedOptions, checkedKeyMap: Array<CheckKeyType>) {
    const { rowKey, data } = options;

    return unref(data)
        .filter(rowData => checkedKeyMap.includes(rowData[unref(rowKey) ?? ""]))
        .map(rowData => toRaw(rowData));
}

function useChecked(props: computedProps, options: UseCheckedOptions) {
    const checkedRowKeysRef = ref<Array<CheckKeyType>>([]);

    const getCheckedRowKeys = computed(() => {
        return filterCheckedData(options, unref(checkedRowKeysRef));
    });

    const setCheckedRowKeys = (keys: any) => {
        checkedRowKeysRef.value = keys;
    };

    const checkedWatch = watch(
        checkedRowKeysRef,
        (checkedKeyMap) => {
            const checkedData = filterCheckedData(options, checkedKeyMap);
            console.log(checkedData);
        }
    );

    return {
        getCheckedRowKeys,
        setCheckedRowKeys,
        checkedWatch
    }
}

export default useChecked;