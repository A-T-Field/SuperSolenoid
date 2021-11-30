<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 15:11:39
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-30 10:03:27
 * @Description: file content
-->
<script setup lang='ts'>
import { onBeforeUnmount, onMounted } from 'vue';
import { default as useDataTable } from '@/composables/use-data-table';

import { getTableData } from '@/api/common.api';

const {
    tableElRef,
    tableDataBind,
    pageBind,
    setRowKey,
    setDataSource,
    setColumns,
    setItemCount,
    setPageNumber,
    handlerUninstall,
    onWrapEvent
} = useDataTable();

onWrapEvent((wrapevent) => {
    console.log(wrapevent);
});

onMounted(() => {
    getTableData().then(response => {
        const { context } = response.data;
        setColumns([
            {
                key: "name",
                title: "姓名",
                sortName: "aaa",
                align: 'center',
                isSort: true,
                mode: 'button'
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
        setRowKey('id');
        setDataSource(context);
        setItemCount(120);
        setPageNumber(1);
    });
});

onBeforeUnmount(() => {
    handlerUninstall();
});
</script>

<template>
    <div class="table-schema">
        <n-data-table ref="tableElRef" v-bind="tableDataBind"></n-data-table>
        <n-pagination v-bind="pageBind"></n-pagination>
    </div>
</template>

<style scoped lang='scss'>
.table-schema {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
}
</style>