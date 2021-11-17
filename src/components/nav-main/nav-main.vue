<!--
 * @Author: maggot-code
 * @Date: 2021-11-17 15:02:58
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-17 18:49:43
 * @Description: file content
-->
<script setup lang='ts'>
import type { PropType } from 'vue';
import type { RouteRecordRaw, RouteRecordName } from 'vue-router';

import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { default as useRouterNav } from '@/router/router-nav';

const router = useRouter();
const emit = defineEmits([
    'on-nav-routes',
    'on-nav-name'
]);
const props = defineProps({
    routes: {
        type: Array as PropType<Array<RouteRecordRaw>>,
        default: []
    },
    keyField: {
        type: String,
        default: "name"
    },
    labelField: {
        type: String,
        default: "title"
    },
    childrenField: {
        type: String,
        default: 'children1'
    }
});

const routemap = useRouterNav(props.routes);

const navActive = ref<RouteRecordName>(routemap[0].name ?? "");
const nowNavRoutes = reactive<Array<RouteRecordRaw>>(routemap[0].children ?? []);

emit('on-nav-routes', nowNavRoutes);
emit('on-nav-name', navActive.value);

function handlerValue(name: RouteRecordName, route: RouteRecordRaw) {
    const { path } = route;
    navActive.value = name;
    emit('on-nav-routes', route.children);
    emit('on-nav-name', name);
    router.push({ path });
}
</script>

<template>
    <n-menu
        mode="horizontal"
        :key-field="keyField"
        :label-field="labelField"
        :children-field="childrenField"
        :inverted="true"
        :accordion="true"
        :options="routemap"
        :value="navActive"
        @update:value="handlerValue"
    ></n-menu>
</template>

<style scoped lang='scss'></style>