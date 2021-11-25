<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 15:11:39
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-25 10:31:50
 * @Description: file content
-->
<script setup lang='ts'>
import { onBeforeUnmount } from 'vue';
import { default as useDataTable } from '@/composables/use-data-table';

const {
    tableElRef,
    tableDataBind,
    uninstall
} = useDataTable({
    rowKey: 'id',
    data: [],
    columns: []
});

onBeforeUnmount(() => {
    uninstall.forEach(func => func());
});
</script>

<template>
    <div style="width: 100%;height: 100%;padding: 10px; box-sizing: border-box;">
        <n-data-table ref="tableElRef" v-bind="tableDataBind"></n-data-table>
    </div>
</template>

<style scoped lang='scss'></style>