<!--
 * @Author: maggot-code
 * @Date: 2021-11-10 16:53:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-22 11:30:12
 * @Description: file content
-->
<script setup lang='ts'>
const { VITE_APP_TITLE } = import.meta.env;
</script>

<template>
    <div class="w100 login-head-context">
        <div class="ofh login-head-context-logo">
            <img class="w100 h100 ofh" src="@/assets/images/logo/logo-def.gif" alt="ATF" />
        </div>
        <h1 class="login-head-context-title">{{ VITE_APP_TITLE }}</h1>
    </div>
    <p class="login-head-describe">前端Kit库-工程化开发解决方案</p>
</template>

<style scoped lang='scss'>
@import "./login-head.scss";
</style>