<!--
 * @Author: maggot-code
 * @Date: 2021-11-09 09:40:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-09 09:49:29
 * @Description: file content
-->
<script setup lang='ts'>
const { VITE_APP_TITLE } = import.meta.env;
</script>

<template>
    <div class="login-head-context">
        <div class="login-head-context-logo">
            <img src="@/assets/images/nyan.gif" alt="ATF" />
        </div>
        <h1 class="login-head-context-title">{{ VITE_APP_TITLE }}</h1>
    </div>
    <p class="login-head-describe">前端Kit库-工程化开发解决方案</p>
</template>

<style scoped lang='scss'>
@import "./login-head.scss";
</style>