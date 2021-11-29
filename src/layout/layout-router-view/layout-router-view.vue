<!--
 * @Author: maggot-code
 * @Date: 2021-11-10 11:05:25
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-29 14:22:58
 * @Description: file content
-->
<template>
    <router-view>
        <template #default="{ Component, route }">
            <!-- <n-scrollbar>
                <transition name="scale-slide" mode="out-in" :appear="true">
                    <component :is="Component" :key="route.fullPath"></component>
                </transition>
            </n-scrollbar>-->

            <transition name="scale-slide" mode="out-in" :appear="true">
                <component :is="Component" :key="route.fullPath"></component>
            </transition>
        </template>
    </router-view>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'layout-router-view',

    components: {},

    computed: {},

    setup() { },

    beforeCreate() { },

    created() { },
});
</script>

<style scoped lang="scss"></style>