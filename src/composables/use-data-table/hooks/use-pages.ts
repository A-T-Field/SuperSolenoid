/*
 * @Author: maggot-code
 * @Date: 2021-11-29 10:34:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-29 16:18:16
 * @Description: file content
 */
import type { PaginationProps } from 'naive-ui';
import type { computedProps } from '../types/props';
import type { pageSizesTuple, pageEventType, pageProps, BaseProps } from '../types/pages';

import { ref, unref, computed } from 'vue';

const defaultPageSizes: pageSizesTuple = [10, 30, 50, 70, 90];

const defaultPageSlot = 8;

const computedDiffPage = ({ count, size, page }: pageEventType): boolean => {
    const diffPage = Math.floor(count / size);

    return diffPage < page - 1;
};

function handlerProps(props: computedProps): BaseProps {
    return {
        showQuickJumper: true,
        showSizePicker: true,
        pageSlot: defaultPageSlot
    };
};

function handlerItemCount(props: computedProps) {
    const itemCountRef = ref(unref(props).count ?? 0);

    const getItemCount = computed(() => {
        return unref(itemCountRef);
    });

    const setItemCount = (count: number) => {
        itemCountRef.value = count;
    };

    const itemCount = {
        getItemCount,
        setItemCount
    };

    return {
        itemCount,
        ...itemCount,
    }
};

function handlerPage(props: computedProps) {
    const pageNumberRef = ref(unref(props).page ?? 0);

    const getPageNumber = computed(() => {
        return unref(pageNumberRef);
    });

    const setPageNumber = (page: number) => {
        pageNumberRef.value = page;
    };

    const pageNumber = {
        getPageNumber,
        setPageNumber
    };

    return {
        pageNumber,
        ...pageNumber
    }
};

function handlerPageSize(props: computedProps) {
    const pageSizesRef = ref(unref(props).pageSizes ?? defaultPageSizes);
    const pageSizeRef = ref(unref(props).pageSize ?? pageSizesRef.value[0]);

    const getPageSize = computed(() => {
        return unref(pageSizeRef);
    });

    const getPageSizes = computed(() => {
        return unref(pageSizesRef)
    });

    const setPageSize = (size: number) => {
        pageSizeRef.value = size;
    };

    const pageSizes = {
        getPageSize,
        getPageSizes,
        setPageSize
    };

    return {
        pageSizes,
        ...pageSizes
    }
};

function handlerPageDisable(props: computedProps) {
    const disabledRef = ref(unref(props).pageDisalbed ?? false);

    const getPageDisabled = computed(() => {
        return unref(disabledRef);
    });

    const setPageDisabled = (status: boolean) => {
        disabledRef.value = status;
    };

    return {
        getPageDisabled,
        setPageDisabled
    }
};

function usePages(props: computedProps) {
    const defaultProps = handlerProps(props);
    const { getPageDisabled } = handlerPageDisable(props);
    const { itemCount, getItemCount } = handlerItemCount(props);
    const { pageNumber, getPageNumber, setPageNumber } = handlerPage(props);
    const { pageSizes, getPageSizes, getPageSize, setPageSize } = handlerPageSize(props);

    const pageBind = computed<pageProps>(() => {
        const bind: PaginationProps = {
            disabled: unref(getPageDisabled),
            itemCount: unref(getItemCount),
            page: unref(getPageNumber),
            pageSize: unref(getPageSize),
            pageSizes: unref(getPageSizes),
            onUpdatePage: setPageNumber,
            onUpdatePageSize: setPageSize
        };

        return Object.assign({}, defaultProps, {
            ...bind,
            style: {
                justifyContent: 'center'
            }
        });
    });

    const pageEvent = computed<pageEventType>(() => ({
        count: unref(getItemCount),
        size: unref(getPageSize),
        page: unref(getPageNumber),
    }));

    return {
        pageBind,
        pageEvent,
        computedDiffPage,
        ...itemCount,
        ...pageNumber,
        ...pageSizes
    }
};

export default usePages;