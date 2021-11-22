<!--
 * @Author: maggot-code
 * @Date: 2021-11-17 13:33:05
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-22 13:25:37
 * @Description: file content
-->
<script setup lang='ts'></script>

<template>
    <div class="w100 ATF-head-main">
        <div class="ATF-head-main-symbol">
            <div class="logo">
                <slot name="logo"></slot>
            </div>

            <div class="title">
                <slot name="title"></slot>
            </div>
        </div>

        <div class="ATF-head-main-default"></div>

        <div class="ATF-head-main-user">
            <slot name="user"></slot>
        </div>
    </div>
</template>

<style scoped lang='scss'>
@import "./head-main.scss";
</style>