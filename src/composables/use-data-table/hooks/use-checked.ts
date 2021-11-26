/*
 * @Author: maggot-code
 * @Date: 2021-11-26 11:05:55
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-26 11:30:01
 * @Description: file content
 */
import type { computedProps, CheckKeyType } from '../types/props';

import { ref, unref, computed, watch } from 'vue';

function useChecked(props: computedProps) {
    const checkedRowKeysRef = ref<Array<CheckKeyType>>([]);

    const getCheckedRowKeys = computed(() => {
        return checkedRowKeysRef.value.filter((key) => {
            // unref(props).data
            console.log(key);
            return true;
        })
    });

    const setCheckedRowKeys = (keys: any) => {
        checkedRowKeysRef.value = keys;
    };

    const checkedWatch = watch(
        checkedRowKeysRef,
        (checkedKeyMap) => {
            console.log(checkedKeyMap);
        },
        { immediate: true }
    );

    return {
        getCheckedRowKeys,
        setCheckedRowKeys,
        checkedWatch
    }
}

export default useChecked;