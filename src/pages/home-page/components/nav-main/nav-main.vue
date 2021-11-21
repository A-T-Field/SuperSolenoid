<!--
 * @Author: maggot-code
 * @Date: 2021-11-17 15:02:58
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-21 22:27:38
 * @Description: file content
-->
<script setup lang='ts'>
import type { PropType } from 'vue';
import type { RouteRecordName, RouteRecordRaw } from 'vue-router';

defineProps({
    routes: {
        type: Array as PropType<Array<RouteRecordRaw>>,
        default: []
    },
    active: {
        type: String as PropType<RouteRecordName>,
        default: ""
    }
});
const emit = defineEmits([
    'wrap:active',
    'wrap:route'
]);
function handlerValue(name: RouteRecordName, route: RouteRecordRaw) {
    emit('wrap:active', name);
    emit('wrap:route', route);
}
</script>

<template >
    <n-menu
        key-field="name"
        label-field="title"
        children-field="nextNode"
        mode="horizontal"
        :inverted="true"
        :options="routes"
        :value="active"
        @update:value="handlerValue"
    ></n-menu>
</template>

<style scoped lang='scss'></style>