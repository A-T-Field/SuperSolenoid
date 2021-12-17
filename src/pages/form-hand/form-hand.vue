<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 14:48:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-17 16:58:25
 * @Description: file content
-->
<script setup lang='ts'></script>

<template>
    <div class="form-hand">
        <n-grid cols="1 600:2 900:3" x-gap="12">
            <n-form-item-gi>
                <n-input></n-input>
            </n-form-item-gi>

            <n-form-item-gi>
                <n-input></n-input>
            </n-form-item-gi>

            <n-form-item-gi>
                <n-input></n-input>
            </n-form-item-gi>
        </n-grid>
    </div>
</template>

<style scoped lang='scss'>
.form-hand {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
}
</style>