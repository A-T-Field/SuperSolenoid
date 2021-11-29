/*
 * @Author: maggot-code
 * @Date: 2021-11-24 15:45:35
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-29 18:33:28
 * @Description: file content
 */
import type { DataTableProps } from 'naive-ui';
import type { wrapEventType, OptionProps } from './types/props';

import { unref, computed, watch } from 'vue';
import { isFunction } from '@/utils/is';

import { default as useProps } from './hooks/use-props';
import { default as useSize } from './hooks/use-size';
import { default as useLoading } from './hooks/use-loading';
import { default as useDataSource } from './hooks/use-data-source';
import { default as useSort } from './hooks/use-sort';
import { default as usePages } from './hooks/use-pages';
import { default as useColumns } from './hooks/use-columns';
import { default as useChecked } from './hooks/use-checked';
import { default as useElement } from './hooks/use-element';

function useDataTable(optionProps?: OptionProps) {
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
        getSortKeyMapOrderRef,
        sortKeyMapOrderRef,
        setSortStates
    } = useSort(props);

    const {
        pageBind,
        pageEvent,
        getItemCount,
        getPageSize,
        getPageNumber,
        setItemCount,
        setPageNumber,
        computedDiffPage
    } = usePages(props);

    const {
        getColumns,
        setColumns,
        columnsWatch
    } = useColumns(props, {
        sortKeyMap: sortKeyMapOrderRef,
        count: getItemCount,
        pageSize: getPageSize,
        page: getPageNumber
    });

    const {
        // getCheckedRowKeys,
        setCheckedRowKeys
    } = useChecked(props, {
        rowKey: getBaseRowKey,
        data: getDataSource
    });

    const {
        tableElRef,
        tableElWatch
    } = useElement(props, { setMaxHeight });

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

    const getWrapEvent = computed<wrapEventType>(() => ({
        sort: unref(getSortKeyMapOrderRef),
        page: unref(pageEvent)
    }));

    const wrapEventWatch = watch(
        () => unref(getWrapEvent),
        (nowWrapEvent: wrapEventType) => {
            const { page } = nowWrapEvent;
            if (computedDiffPage(page)) return setPageNumber(1);
            isFunction(props.value.onWrapEvent) && props.value.onWrapEvent(nowWrapEvent);
        },
    );

    const handlerUninstall = () => {
        loadingWatch();
        rowKeyWatch();
        dataSourceWatch();
        columnsWatch();
        tableElWatch();
        wrapEventWatch();
    }

    return {
        props,
        tableElRef,
        tableDataBind,
        pageBind,
        setLoading,
        setRowKey,
        setDataSource,
        setColumns,
        setItemCount,
        setPageNumber,
        handlerUninstall,
    }
}

export default useDataTable;