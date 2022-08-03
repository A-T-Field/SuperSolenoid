<!--
 * @Author: maggot-code
 * @Date: 2021-10-29 18:05:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-22 17:10:06
 * @Description: file content
-->
<script setup lang='ts'>
import { default as LoadBar } from '@/components/load-bar';
import { default as Message } from '@/components/message';
</script>

<template>
    <n-loading-bar-provider>
        <load-bar>
            <n-message-provider>
                <message></message>
            </n-message-provider>
        </load-bar>
    </n-loading-bar-provider>
</template>

<style scoped lang='scss'>
</style>