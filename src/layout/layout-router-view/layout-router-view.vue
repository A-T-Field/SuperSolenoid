<!--
 * @Author: maggot-code
 * @Date: 2021-11-10 11:05:25
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-22 16:54:50
 * @Description: file content
-->
<template>
    <router-view>
        <template #default="{ Component, route }">
            <n-scrollbar>
                <transition name="scale-slide" mode="out-in" :appear="true">
                    <component :is="Component" :key="route.fullPath"></component>
                </transition>
            </n-scrollbar>
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