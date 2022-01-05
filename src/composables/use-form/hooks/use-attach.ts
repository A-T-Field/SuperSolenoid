/*
 * @Author: maggot-code
 * @Date: 2022-01-05 16:23:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-05 16:30:09
 * @Description: file content
 */
import type { Ref } from 'vue';

import { onBeforeUnmount, onMounted, shallowRef } from 'vue';

interface IRecycleTarget {
    onMount: () => void;
    onUnmount: () => void;
}

export const useAttach = <T extends IRecycleTarget>(target: T): [Ref<T>, (arg: T) => T] => {
    const oldTargetRef = shallowRef<T>(target);

    oldTargetRef.value = target;

    onMounted(() => {
        target.onMount();
    })

    onBeforeUnmount(() => {
        oldTargetRef.value?.onUnmount();
    })

    const checker = (target: T) => {
        if (target !== oldTargetRef.value) {
            if (oldTargetRef.value) {
                oldTargetRef.value.onUnmount();
            }

            oldTargetRef.value = target;

            target.onMount();
        }
        return oldTargetRef.value as T;
    }

    return [oldTargetRef, checker];
}