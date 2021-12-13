<!--
 * @Author: maggot-code
 * @Date: 2021-11-23 09:21:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-23 09:28:31
 * @Description: file content
-->
<script setup lang='ts'>
defineProps({
    name: {
        type: String,
        default: ""
    }
})
</script>

<template>
    <i class="iconfont" :class="[name]"></i>
</template>

<style scoped lang='scss'></style>