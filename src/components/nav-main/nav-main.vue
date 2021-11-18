<!--
 * @Author: maggot-code
 * @Date: 2021-11-17 15:02:58
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-18 15:47:33
 * @Description: file content
-->
<script setup lang='ts'>
import type { PropType } from 'vue';
import type { RouteRecordRaw, RouteRecordName } from 'vue-router';

import { onMounted, computed } from 'vue';
import { filterRoutesNav } from '@/router/router-utils';

const props = defineProps({
    routes: {
        type: Array as PropType<Array<RouteRecordRaw>>,
        default: []
    },
    active: {
        type: String as PropType<RouteRecordName | undefined | null>,
        default: ""
    }
});
const emit = defineEmits([
    'wrap:route'
]);

const baseRoutes = computed(() => {
    return filterRoutesNav(props.routes).filter(route => route.meta?.parent === 'root');
});

function handlerUpdateValue(name: RouteRecordName, route: RouteRecordRaw) {
    emit('wrap:route', route);
}

function filterValue(routes: Array<RouteRecordRaw>) {
    for (let index = 0; index < routes.length; index++) {
        const { name, children } = routes[index];
        if (name === props.active) return routes[index];
        return filterValue(children ?? []);
    }
}

onMounted(() => {
    emit('wrap:route', filterValue(baseRoutes.value));
})
</script>

<template >
    <n-menu
        mode="horizontal"
        key-field="name"
        label-field="title"
        children-field="child"
        :inverted="true"
        :accordion="true"
        :options="baseRoutes"
        :value="active"
        @update:value="handlerUpdateValue"
    ></n-menu>
</template>

<style scoped lang='scss'></style>