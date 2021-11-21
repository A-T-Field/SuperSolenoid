<!--
 * @Author: maggot-code
 * @Date: 2021-11-16 17:36:19
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-21 19:19:45
 * @Description: file content
-->
<script setup lang='ts'>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { getPower, getRouting } from '@/api/common.api';
import { getContext } from '@/utils';
import { getPowerCached, getRoutingCached, setPowerCached, setRoutingCached } from '@/utils/cached';
import { PagesEnum } from '@/enums/pages.enum';

const store = useStore();
const router = useRouter();

const handlerPower = (response) => {
    const { power } = getContext(response);
    setPowerCached(power);
    return power;
}

const handlerRouting = (response) => {
    const routing = getContext(response);
    if (routing.length <= 0) {
        router.push({ name: PagesEnum.ERROR_NOT_PAGE });
        return;
    }
    const [first] = routing;
    const { name } = first;
    setRoutingCached(routing);
    store.dispatch('router/setRouting', routing);
    router.push({ name })
}

// 检查power情况
const power = getPowerCached();
if (power) {
    // 检查路由表是否存在
    const routing = getRoutingCached();
    if (routing) {
        if (routing.length <= 0) {
            router.push({ name: PagesEnum.ERROR_NOT_PAGE });
        } else {
            const [first] = routing;
            const { name } = first;
            store.dispatch('router/setRouting', routing);
            router.push({ name });
        }
    } else {
        // 重新获取路由表
        getRouting({ power }).then(handlerRouting)
    }
} else {
    // 重新获取power
    getPower()
        .then(handlerPower)
        .then((power) => {
            // 重新获取路由表
            getRouting({ power }).then(handlerRouting)
        })
}
</script>

<template>ready</template>

<style scoped lang='scss'></style>