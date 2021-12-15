<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 14:49:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-15 16:54:20
 * @Description: file content
-->
<script setup lang='ts'>
import { ref } from 'vue';
const value = ref("");
const rule = {
    trigger: ['input', 'blur'],
    validator() {
        if (value.value.length <= 0) {
            return new Error("必填阿")
        }
    }
}
</script>
<template>
    <div class="form-schema">
        <n-form label-placement="left" label-width="120px">
            <n-grid cols="1 600:2 1200:3" :x-gap="24">
                <n-form-item-gi
                    :span="1"
                    label="姓名11"
                    label-placement="left"
                    label-width="120px"
                    :rule="rule"
                >
                    <div style="width: 100%; display: flex;flex-direction: column;">
                        <n-input v-model:value="value"></n-input>
                        <p>说明</p>
                    </div>
                </n-form-item-gi>

                <n-form-item-gi :span="1" label="姓名">
                    <n-input></n-input>
                </n-form-item-gi>

                <n-form-item-gi :span="1" label="姓名">
                    <n-input></n-input>
                </n-form-item-gi>

                <n-form-item-gi :span="3" label="姓名">
                    <n-input></n-input>
                </n-form-item-gi>

                <n-form-item-gi :span="1" label="姓名">
                    <n-input></n-input>
                </n-form-item-gi>
            </n-grid>
        </n-form>
    </div>
</template>

<style scoped lang='scss'>
.form-schema {
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    overflow: hidden;
}
</style>