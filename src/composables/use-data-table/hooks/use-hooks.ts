/*
 * @Author: maggot-code
 * @Date: 2021-11-30 09:49:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-30 10:02:00
 * @Description: file content
 */
import type { wrapeventHooks, OnWrapeventHooks } from '../types/props';

import { reactive, unref, computed } from 'vue';

function handlerOnWrapEvent() {
    const wrapeventHooks = reactive<OnWrapeventHooks>({
        hooks: () => { }
    });

    const getWrapevent = computed(() => {
        return unref(wrapeventHooks);
    });

    const onWrapEvent = (hooks: wrapeventHooks) => {
        wrapeventHooks.hooks = hooks;
    };

    return {
        getWrapevent,
        onWrapEvent
    }
}

function useHooks() {
    return {
        ...handlerOnWrapEvent()
    }
}

export default useHooks;