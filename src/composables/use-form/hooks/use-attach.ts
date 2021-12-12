/*
 * @Author: maggot-code
 * @Date: 2021-12-12 22:10:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-12 22:10:46
 * @Description: file content
 */
import type { Ref } from 'vue';

import {
    onMounted,
    onBeforeUnmount,
    shallowRef,
} from 'vue';

export const useAttach = <T>(target: T): [Ref<T>] => {
    const targetRef = shallowRef<T>(target);

    onMounted(() => { });

    onBeforeUnmount(() => { });

    return [targetRef];
}