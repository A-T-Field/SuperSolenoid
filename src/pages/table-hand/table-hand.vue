<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 15:10:52
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-22 17:15:51
 * @Description: file content
-->
<script setup lang='ts'>
import { h, ref, reactive, onMounted } from 'vue';
import { getTableData } from '@/api/common.api';
import { NAvatar } from '@/plugins/naive-ui';

const tableLoading = ref<boolean>(true);
const tableData = ref<Array<any>>([]);
const tableColumns = [
    {
        key: "ATF-select",
        type: 'selection',
        align: 'center',
    },
    {
        key: "img",
        title: "头像",
        align: 'center',
        render(row) {
            return h(NAvatar, {
                size: 48,
                src: row.img
            })
        }
    },
    {
        key: "name",
        title: "姓名",
        align: 'center',
        ellipsis: {
            tooltip: true
        }
    },
    {
        key: 'date',
        title: "日期",
        align: 'center',
        ellipsis: {
            tooltip: true
        }
    },
    {
        key: 'time',
        title: "时间",
        align: 'center',
        ellipsis: {
            tooltip: true
        }
    }
];

const pageoptions = reactive({
    page: 1,
    pageSize: 10,
    pageSizes: [
        {
            label: "10 / 每页",
            value: 10
        },
        {
            label: "20 / 每页",
            value: 20
        },
        {
            label: "30 / 每页",
            value: 30
        }
    ],
    pageCount: 20,
    showSizePicker: true,
    showQuickJumper: true,
})

function handlerRowKey(rowData) {
    return rowData.id;
}

function handlerCheck(keys) {
    console.log(keys);
}

onMounted(() => {
    getTableData().then(response => {
        const { context } = response.data;
        tableData.value = context;
        tableLoading.value = false;
    });
})
</script>

<template>
    <div class="ATF-table">
        <n-data-table
            ref="ATFTable"
            size="large"
            max-height="height:100%;"
            min-height="height:100%;"
            row-class-name="ATF-table-row"
            :remote="false"
            :bordered="true"
            :bottom-bordered="true"
            :striped="true"
            :loading="tableLoading"
            :columns="tableColumns"
            :data="tableData"
            :row-key="handlerRowKey"
            :pagination="pageoptions"
            :virtual-scroll="false"
            @update:checked-row-keys="handlerCheck"
        ></n-data-table>
    </div>
</template>

<style scoped lang='scss'>
@import "./table-hand.scss";
</style>