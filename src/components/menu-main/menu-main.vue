<!--
 * @Author: maggot-code
 * @Date: 2021-11-17 15:02:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-17 18:57:21
 * @Description: file content
-->
<script setup lang='ts'>
import type { PropType } from 'vue';
import type { RouteRecordRaw, RouteRecordName } from 'vue-router';

import { ref, toRaw } from 'vue';
import { useRouter } from 'vue-router';
import { default as useRouterMenu } from '@/router/router-menu';

const router = useRouter();

const props = defineProps({
    routes: {
        type: Array as PropType<Array<RouteRecordRaw>>,
        default: []
    },
    defActive: {
        type: String as PropType<RouteRecordName>,
        default: ""
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
        default: 'children'
    }
});

const routemap = toRaw(useRouterMenu(props.routes));

const menuActive = ref<RouteRecordName>(props.defActive);

console.log(menuActive.value);


function handlerValue(name: RouteRecordName, route: RouteRecordRaw) {
    const { path } = route;
    menuActive.value = name;
    router.push({ path });
}
</script>

<template>
    <n-menu
        :key-field="keyField"
        :label-field="labelField"
        :children-field="childrenField"
        :inverted="true"
        :accordion="true"
        :options="routemap"
        :value="menuActive"
        @update:value="handlerValue"
    ></n-menu>
</template>

<style scoped lang='scss'></style>