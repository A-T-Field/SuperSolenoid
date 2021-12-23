<!--
 * @Author: maggot-code
 * @Date: 2021-12-23 10:40:21
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-23 14:31:07
 * @Description: file content
-->
<script setup lang='ts'>
import { ref, watchEffect } from 'vue';
import { getCityList } from '@/api/common.api';

const provinceVal = ref("");
const province = [
    {
        label: "河北省",
        value: "hb"
    },
    {
        label: "东北省",
        value: "db"
    }
];
const cityVal = ref("");
const cityOptions = ref([]);
const loading = ref(true);

watchEffect(() => {
    loading.value = true;
    cityVal.value = "";
    cityOptions.value = [];

    getCityList(provinceVal.value).then(response => {
        const { context } = response.data;
        cityOptions.value = context;
    }).finally(() => loading.value = false)
})
</script>

<template>
    <div>
        <n-select v-model:value="provinceVal" :options="province"></n-select>
        <n-select v-model:value="cityVal" :loading="loading" :options="cityOptions"></n-select>
    </div>
</template>

<style scoped lang='scss'>
@import "./json-test.scss";
</style>