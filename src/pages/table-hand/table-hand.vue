<!--
 * @Author: maggot-code
 * @Date: 2021-11-22 15:10:52
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-23 16:44:00
 * @Description: file content
-->
<script setup lang='ts'>
import { NAvatar } from '@/plugins/naive-ui';
import { h, ref, computed, onMounted } from 'vue';
import { getTableData } from '@/api/common.api';

const packageBox = ref<Element | null>(null);
const packageHeight = ref(0);
const packageReady = computed(() => packageHeight.value > 0);

const tableLoading = ref<boolean>(true);

const tableData = ref<Array<any>>([]);

const sortStatesRef = ref([])
const sortKeyMapOrderRef = computed(() =>
    sortStatesRef.value.reduce((result, { columnKey, order }) => {
        result[columnKey] = order
        return result
    }, {})
);

const tableColumns = computed(() => [
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
        sorter: false,
        sortOrder: false,
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
        sorter: false,
        sortOrder: false,
        ellipsis: {
            tooltip: true
        }
    },
    {
        type: "",
        key: 'date',
        title: "日期",
        align: 'center',
        sorter: {
            multiple: 3
        },
        sortOrder: sortKeyMapOrderRef.value['date'] || false,
        ellipsis: {
            tooltip: true
        }
    },
    {
        key: 'time',
        title: "时间",
        align: 'center',
        sorter: {
            multiple: 4
        },
        sortOrder: sortKeyMapOrderRef.value['time'] || false,
        ellipsis: {
            tooltip: true
        }
    }
]);

function handlerRowKey(rowData) {
    return rowData.id;
}

function handlerCheck(keys) {
    console.log(keys);
}

function handlerSorter(sorters) {
    console.log(sorters);
    sortStatesRef.value = [].concat(sorters);
}

onMounted(() => {
    getTableData().then(response => {
        const { context } = response.data;
        tableData.value = context;
        tableLoading.value = false;
    });

    const height = packageBox.value?.clientHeight ?? 0;
    packageHeight.value = height - 90 <= 0 ? 0 : height - 90;
});
</script>

<template>
    <div class="ATF-table" ref="packageBox">
        <!-- size small medium large -->
        <n-data-table
            v-if="packageReady"
            ref="ATFTable"
            row-class-name="ATF-table-row"
            size="large"
            :max-height="packageHeight"
            :min-height="packageHeight"
            :remote="false"
            :bordered="true"
            :bottom-bordered="true"
            :striped="true"
            :loading="tableLoading"
            :columns="tableColumns"
            :data="tableData"
            :row-key="handlerRowKey"
            :pagination="false"
            :virtual-scroll="false"
            @update:checked-row-keys="handlerCheck"
            @update:sorter="handlerSorter"
        ></n-data-table>
    </div>
</template>

<style scoped lang='scss'>
@import "./table-hand.scss";
</style>