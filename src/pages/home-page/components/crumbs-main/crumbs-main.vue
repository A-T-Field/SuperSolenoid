<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 09:49:48
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-26 16:16:33
 * @Description: file content
-->
<script setup lang='ts'>
import type { RouteRecordName, RouteRecordRaw } from 'vue-router';

import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { treeEach } from '@/utils/tree';

const route = useRoute();

const emit = defineEmits(['wrap-select']);

const handlerMatched = (route: RouteRecordRaw): RouteRecordRaw => {
    const { meta } = route;
    return Object.assign({}, route, meta);
}
const matched = computed(() => treeEach<RouteRecordRaw>(handlerMatched, route.matched));

function handlerSelect(name: RouteRecordName) {
    emit('wrap-select', name);
}
</script>

<template>
    <n-breadcrumb>
        <template v-for="options in matched">
            <n-breadcrumb-item>
                <n-dropdown
                    key-field="name"
                    label-field="title"
                    children-field="children"
                    :inverted="true"
                    :options="options.children"
                    @select="handlerSelect"
                >{{ options.meta?.title }}</n-dropdown>
            </n-breadcrumb-item>
        </template>
    </n-breadcrumb>
</template>

<style scoped lang='scss'></style>