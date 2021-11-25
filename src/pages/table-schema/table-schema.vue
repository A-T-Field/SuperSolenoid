<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 15:11:39
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-25 14:19:05
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
    setDataSource
} = useDataTable({
    rowKey: 'id',
    data: [],
    columns: [
        {
            key: "name",
            title: "姓名",
            isSort: true,
            mode: 'button'
            // sorter: false,
            // sortOrder: false,
            // ellipsis: {
            //     tooltip: true
            // }
        },
        {
            key: 'date',
            title: "日期",
        },
        {
            key: 'time',
            title: "时间",
            align: 'center',
            isSort: true
            // ellipsis: {
            //     tooltip: true
            // }
        }
    ]
});

onMounted(() => {
    getTableData().then(response => {
        const { context } = response.data;
        setDataSource(context);
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