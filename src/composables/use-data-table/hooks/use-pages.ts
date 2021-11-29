/*
 * @Author: maggot-code
 * @Date: 2021-11-29 10:34:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-29 14:29:48
 * @Description: file content
 */
import type { PaginationProps } from 'naive-ui';
import type { computedProps } from '../types/props';
import type { pageSizesType, pageEventType, pageProps, BaseProps } from '../types/pages';

import { ref, unref, computed, watch } from 'vue';

const defaultPageSizes: pageSizesType = [10, 30, 50, 70, 90];

const defaultPageSlot = 8;

function handlerProps(props: computedProps): BaseProps {
    return {
        showQuickJumper: true,
        showSizePicker: true,
        pageSizes: defaultPageSizes,
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
    const pageSizesRef = ref(defaultPageSizes);
    const pageSizeRef = ref(unref(props).pageSize ?? pageSizesRef.value[0]);

    const getPageSize = computed(() => {
        return unref(pageSizeRef);
    });

    const setPageSize = (size: number) => {
        pageSizeRef.value = size;
    };

    const pageSizes = {
        getPageSize,
        setPageSize
    };

    return {
        pageSizes,
        ...pageSizes
    }
};

function usePages(props: computedProps) {
    const defaultProps = handlerProps(props);
    const { itemCount, getItemCount } = handlerItemCount(props);
    const { pageNumber, getPageNumber, setPageNumber } = handlerPage(props);
    const { pageSizes, getPageSize, setPageSize } = handlerPageSize(props);

    const pageBind = computed<pageProps>(() => {
        const bind: PaginationProps = {
            itemCount: unref(getItemCount),
            page: unref(getPageNumber),
            pageSize: unref(getPageSize),
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

    const pageEventWatch = watch(
        () => unref(pageEvent),
        ({ count, size, page }) => {
            const diffPage = Math.floor(count / size);

            if (diffPage < page - 1) return setPageNumber(1);

            console.log(count, size, page);
        }
    );

    return {
        pageBind,
        pageEventWatch,
        ...itemCount,
        ...pageNumber,
        ...pageSizes
    }
};

export default usePages;