/*
 * @Author: maggot-code
 * @Date: 2021-11-12 10:17:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-12 18:29:00
 * @Description: file content
 */
import type { Ref } from 'vue';

import { watch } from 'vue';

import { isFunction } from '$/utils/is';
import { messageWarning } from '$/utils/tips';

let watchReady = () => { };

function unInstallWatchReady() {
    isFunction(watchReady) && watchReady();
}

function useSystemReady<S extends string, C>(status: Ref<S>, controller: C) {
    const readyStatus: Ref<S> = status;

    unInstallWatchReady();

    watchReady = watch(readyStatus, (nowStatus: Ref<S>) => {
        const handler = controller[nowStatus.toString()];

        if (!isFunction(handler)) {
            unInstallWatchReady();
            return;
        }

        handler(nowStatus)
            .then((nextStatus: S) => {
                readyStatus.value = nextStatus;
            })
            .catch((msg: string) => {
                unInstallWatchReady();
                messageWarning(msg);
            })
    }, { immediate: true });

    return {
        readyStatus,
        watchReady
    }
}

export {
    unInstallWatchReady
}

export default useSystemReady;