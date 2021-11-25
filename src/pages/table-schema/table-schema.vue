<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 15:11:39
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-25 18:24:32
 * @Description: file content
-->
<script setup lang='ts'>
import { onBeforeUnmount, onMounted } from 'vue';
import { default as useDataTable } from '@/composables/use-data-table';

import { getTableData } from '@/api/common.api';

const {
    tableElRef,
    tableDataBind,
    uninstall,
    setRowKey,
    setDataSource,
    setColumns
} = useDataTable();

onMounted(() => {
    getTableData().then(response => {
        const { context } = response.data;
        setColumns([
            {
                key: "name",
                title: "姓名",
                sortName: "aaa",
                align: 'center',
                isSort: true
            },
            {
                key: 'date',
                title: "日期",
                isSort: true
            },
            {
                key: 'time',
                title: "时间",
                isSort: true
            }
        ]);
        setDataSource(context);
        setRowKey('id');
    });
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