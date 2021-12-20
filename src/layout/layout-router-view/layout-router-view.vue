<!--
 * @Author: maggot-code
 * @Date: 2021-11-10 11:05:25
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-20 09:46:42
 * @Description: file content
-->
<template>
    <router-view>
        <template #default="{ Component, route }">
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