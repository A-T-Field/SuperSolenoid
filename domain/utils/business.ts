/*
 * @Author: maggot-code
 * @Date: 2021-11-11 16:04:08
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-11 16:05:48
 * @Description: file content
 */
import type { Ref } from 'vue';

// 设置loading
export const setLoading = (loading: Ref<boolean>, status?: boolean) => () => loading.value = status ?? false;