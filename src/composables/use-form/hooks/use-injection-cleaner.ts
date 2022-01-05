/*
 * @Author: maggot-code
 * @Date: 2022-01-05 16:51:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-05 16:52:49
 * @Description: file content
 */
import type { InjectionKey, Ref } from 'vue';

import { provide, ref } from 'vue';

export const useInjectionCleaner = (injectionKeys: Array<InjectionKey<Ref<unknown>>>) => {
    injectionKeys.forEach((key) => provide(key, ref()));
}