/*
 * @Author: maggot-code
 * @Date: 2021-12-14 15:04:25
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-14 15:08:22
 * @Description: file content
 */
import type { Ref } from 'vue';

import { onBeforeUnmount, onMounted, shallowRef } from 'vue';

interface IRecycleTarget {
    onMount: () => void
    onUnmount: () => void
}

export const useAttach = <T extends IRecycleTarget>(target: T): [Ref<T>, (arg: T) => T] => {
    const targetRef = shallowRef<Nullable<T>>(null);

    targetRef.value = target;

    onMounted(() => {
        target.onMount()
    })

    onBeforeUnmount(() => {
        target.onUnmount()
    })

    const checker = (target: T) => {
        if (target !== targetRef.value) {
            if (targetRef.value) {
                targetRef.value.onUnmount()
            }
            targetRef.value = target
            target.onMount()
        }
        return targetRef.value as T
    }

    return [
        targetRef as Ref<T>,
        checker
    ];
}