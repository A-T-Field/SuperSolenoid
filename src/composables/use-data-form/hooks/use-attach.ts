/*
 * @Author: maggot-code
 * @Date: 2021-12-08 22:31:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-09 00:58:12
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