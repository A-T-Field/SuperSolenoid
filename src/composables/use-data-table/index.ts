/*
 * @Author: maggot-code
 * @Date: 2021-11-24 15:45:35
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-26 14:16:06
 * @Description: file content
 */
import type { DataTableProps } from 'naive-ui';
import type { OptionProps } from './types/props';

import { unref, computed } from 'vue';

import { default as useProps } from './hooks/use-props';
import { default as useSize } from './hooks/use-size';
import { default as useLoading } from './hooks/use-loading';
import { default as useDataSource } from './hooks/use-data-source';
import { default as useSort } from './hooks/use-sort';
import { default as useColumns } from './hooks/use-columns';
import { default as useChecked } from './hooks/use-checked';
import { default as useElement } from './hooks/use-element';

function useDataTable(optionProps?: OptionProps) {
    console.log('use data table');
    const { props } = useProps(optionProps ?? {});

    const {
        getMaxHeight,
        setMaxHeight
    } = useSize(props);

    const {
        getLoading,
        setLoading,
        loadingWatch
    } = useLoading(props);

    const {
        getBaseRowKey,
        getRowKey,
        getDataSource,
        setRowKey,
        setDataSource,
        rowKeyWatch,
        dataSourceWatch
    } = useDataSource(props);

    const {
        sortKeyMapOrderRef,
        setSortStates,
        sortWatch
    } = useSort(props);

    const {
        getColumns,
        setColumns,
        columnsWatch
    } = useColumns(props, {
        sortKeyMap: sortKeyMapOrderRef
    });

    const {
        setCheckedRowKeys,
        checkedWatch
    } = useChecked(props, {
        rowKey: getBaseRowKey,
        data: getDataSource
    });

    const {
        tableElRef,
        tableElWatch
    } = useElement(props, { setMaxHeight });

    const handlerUninstall = () => {
        loadingWatch();
        rowKeyWatch();
        dataSourceWatch();
        sortWatch();
        columnsWatch();
        checkedWatch();
        tableElWatch();
    }

    const tableDataBind = computed(() => {
        const bind: DataTableProps = {
            loading: unref(getLoading),
            maxHeight: unref(getMaxHeight),
            data: unref(getDataSource),
            columns: unref(getColumns),
            rowKey: unref(getRowKey),
            onUpdateSorter: setSortStates,
            onUpdateCheckedRowKeys: setCheckedRowKeys
        };

        return Object.assign({}, unref(props), bind);
    });

    return {
        props,
        tableElRef,
        tableDataBind,
        setLoading,
        setRowKey,
        setDataSource,
        setColumns,
        handlerUninstall,
    }
}

export default useDataTable;