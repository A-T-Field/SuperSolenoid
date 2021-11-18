<!--
 * @Author: maggot-code
 * @Date: 2021-11-17 15:02:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-18 15:21:19
 * @Description: file content
-->
<script setup lang='ts'>
import type { PropType } from 'vue';
import type { RouteRecordRaw, RouteRecordName } from 'vue-router';

import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { filterRoutesMenu } from '@/router/router-utils';

const router = useRouter();

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

const baseRoutes = computed(() => {
    return filterRoutesMenu(props.routes);
});

function handlerUpdateValue(name: RouteRecordName, route: RouteRecordRaw) {
    router.push(route);
}
</script>

<template>
    <n-menu
        key-field="name"
        label-field="title"
        children-field="children"
        :inverted="true"
        :accordion="true"
        :options="baseRoutes"
        :value="active"
        @update:value="handlerUpdateValue"
    ></n-menu>
</template>

<style scoped lang='scss'></style>