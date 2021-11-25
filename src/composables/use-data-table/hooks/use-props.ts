/*
 * @Author: maggot-code
 * @Date: 2021-11-24 15:50:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-25 13:52:35
 * @Description: file content
 */
import type { tableProps, OptionProps } from '../types/props';

import { computed } from 'vue';

const defaultProps: tableProps = {
    bottomBordered: true,
    cascade: true,
    pagination: false,
    flexHeight: false,
    remote: false,
    virtualScroll: false,
    maxHeight: 240,
    minHeight: 120,
    scrollX: 0,
    bordered: true,
    indent: 12,
    rowClassName: "",
    size: "large",
    striped: true,
    childrenKey: "children",
    rowKey: "index",
    loading: false,
    data: [],
    columns: [],
    useSelect: true
};

function useProps(optionProps: OptionProps) {
    const props = computed<tableProps>(() => Object.assign({}, defaultProps, optionProps));

    return {
        props
    }
}

export default useProps;