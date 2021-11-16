<!--
 * @Author: maggot-code
 * @Date: 2021-11-16 17:36:19
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-17 01:06:39
 * @Description: file content
-->
<script setup lang='ts'>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { getPower, getRouting } from '@/api/common.api';
import { getContext } from '@/utils';
import { getPowerCached, setPowerCached, setRoutingCached } from '@/utils/cached';

const store = useStore();
const router = useRouter();

const handlerPower = (response) => {
    const { power } = getContext(response);
    setPowerCached(power);
    return power;
}

const handlerRouting = (response) => {
    const routing = getContext(response);
    const [first] = routing;
    const { path } = first;
    setRoutingCached(routing);
    store.dispatch('router/setRouting', routing);
    router.push({ path })
}

// 检查power情况
const power = getPowerCached();
if (power) {
    // 检查路由表是否存在
    const routing = store.getters['router/getRouting'];
    if (routing) {
        console.log(routing);
        const [first] = routing;
        const { path } = first;
        router.push({ path })
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