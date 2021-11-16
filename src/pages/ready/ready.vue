<!--
 * @Author: maggot-code
 * @Date: 2021-11-10 14:53:58
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-16 17:16:38
 * @Description: file content
-->
<script setup lang='ts'>
import { ref, watch, onBeforeUnmount } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import { isFunction, isNil } from '@/utils/is';
import { messageWarning } from '@/utils/tips';
import { getToken } from '@/utils/cookie/token';
import { setRoutingCached } from '@/utils/cached';
import { PagesEnum } from '@/enums/pages.enum';

import { checkUser, getRouting } from '@/api/common.api';

import { default as useRouterInstall } from '@/router/router-install';

type readyStatus = ''
    | 'findToken'
    | 'checkToken'
    | 'setupRouting'
type ReadyStatusControl = {
    [key in readyStatus]?: () => Promise<any>;
};

const store = useStore();

const router = useRouter();
const route = useRoute();
const { query } = route;

const controller: ReadyStatusControl = {
    findToken() {
        const token = getToken();
        if (!token) return Promise.reject({
            msg: "没有找到身份信息!",
            path: PagesEnum.BASE_LOGIN,
            query: {
                s: 'setupRouting'
            }
        });

        return Promise.resolve('setupRouting')
    },
    checkToken() {
        return checkUser().then(response => {
            const { code, message } = response.data;

            return code <= 0 ? Promise.resolve('setupRouting') : Promise.reject({
                msg: message,
                path: PagesEnum.BASE_LOGIN,
            });
        })
    },
    setupRouting() {
        return getRouting().then(response => {
            const { context } = response.data;

            setRoutingCached(context);

            const route = useRouterInstall(context);
            const [first] = route;
            const { path } = first;

            store.dispatch('router/setRouting', route);

            router.push({ path });

            return Promise.resolve();
        });
    }
}

const status = ref<readyStatus>(query?.s as readyStatus ?? 'findToken');
const statusWatch = watch(status, (nowStatus) => {
    const handler = controller[nowStatus];
    if (!isFunction(handler)) return;

    handler()
        .then((nextStatus) => {
            if (isNil(nextStatus)) return uninstallStatusWatch();

            status.value = nextStatus;
        })
        .catch((route) => {
            const { msg } = route;
            uninstallStatusWatch();
            msg && messageWarning(msg);
            router.replace(route);
        })
}, { immediate: true });

const uninstallStatusWatch = () => isFunction(statusWatch) && statusWatch();

const handlerBeforeUnmount = () => {
    uninstallStatusWatch();
}
onBeforeUnmount(handlerBeforeUnmount);
</script>

<template>
    <h1>ready：{{ status }}</h1>
</template>

<style scoped lang='scss'></style>