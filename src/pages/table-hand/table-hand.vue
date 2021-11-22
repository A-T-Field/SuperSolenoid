<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 15:10:52
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-22 18:25:17
 * @Description: file content
-->
<script setup lang='ts'>
import { NAvatar } from '@/plugins/naive-ui';

import { h, ref, reactive, computed, onMounted } from 'vue';
import { getTableData } from '@/api/common.api';
import { isNil } from '@/utils/is';

const packageBox = ref<Element | null>(null);
const packageHeight = computed(() => {
    if (isNil(packageBox.value)) return 0;

    const { clientHeight } = packageBox.value;
    return clientHeight as number;
});
const packageReady = computed(() => {
    return packageHeight.value > 0;
});

const tableLoading = ref<boolean>(true);
const tableData = ref<Array<any>>([]);
const tableColumns = [
    {
        key: "ATF-select",
        type: 'selection',
        align: 'center',
        fixed: "left"
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

    console.dir(packageBox.value);
});
</script>

<template>
    <div class="ATF-table" ref="packageBox">
        <n-data-table
            v-if="packageReady"
            ref="ATFTable"
            size="large"
            :max-height="packageHeight"
            :min-height="packageHeight"
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