/*
 * @Author: maggot-code
 * @Date: 2021-12-17 15:07:39
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 15:12:04
 * @Description: file content
 */
import type { Ref } from 'vue';

import { onBeforeUnmount, onMounted, shallowRef } from 'vue';

interface IRecycleTarget {
    onMount: () => void
    onUnmount: () => void
}

export const useAttach = <T extends IRecycleTarget>(target: T): [
    Ref<T>, (arg: T) => T
] => {
    const targetRef = shallowRef<T>(target);

    targetRef.value = target;

    onMounted(() => {
        target.onMount();
    });

    onBeforeUnmount(() => {
        target.onUnmount();
    });

    const checker = (tt: T) => {
        if (target !== targetRef.value) {
            if (targetRef.value) {
                targetRef.value.onUnmount()
            }
            targetRef.value = tt
            tt.onMount()
        }
        return targetRef.value as T
    }

    return [targetRef, checker];
}