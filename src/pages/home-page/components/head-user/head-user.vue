<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 11:20:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-22 13:47:54
 * @Description: file content
-->
<script setup lang='ts'>
import { computed } from 'vue';

const model = {
    setting: {
        label: "设置中心"
    },
    logout: {
        label: "退出登录"
    }
}

const options = computed(() => {
    const data: Array<any> = [];

    for (const key in model) {
        if (key === 'logout') {
            data.push({ key: 'd1', type: 'divider' })
        }
        data.push({ key, ...model[key] })
    }

    return data;
});

function handlerSelect(target: string) {
    console.log(target);
}
</script>

<template>
    <n-dropdown
        trigger="hover"
        placement="left-end"
        :inverted="true"
        :options="options"
        @select="handlerSelect"
    >
        <n-badge :value="4">
            <n-avatar :size="48" :round="true">Admin</n-avatar>
        </n-badge>
    </n-dropdown>
</template>

<style scoped lang='scss'>
@import "./head-user.scss";
</style>