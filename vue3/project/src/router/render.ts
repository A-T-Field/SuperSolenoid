/*
 * @Author: maggot-code
 * @Date: 2021-10-22 14:20:13
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-10-22 14:30:48
 * @Description: file content
 */
import { RouteRecordRaw } from 'vue-router';

function useRouterRender(routers: RouteRecordRaw) {
    console.log(routers);
    return routers;
}

export default useRouterRender;