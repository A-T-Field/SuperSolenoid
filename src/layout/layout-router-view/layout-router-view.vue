<!--
 * @Author: maggot-code
 * @Date: 2021-11-10 11:05:25
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-17 13:23:49
 * @Description: file content
-->
<template>
    <!-- <router-view v-slot="{ Component }">
        <transition name="scale-slide">
            <component :is="Component"></component>
        </transition>
    </router-view>-->
    <router-view></router-view>
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