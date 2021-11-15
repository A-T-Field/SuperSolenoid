/*
 * @Author: maggot-code
 * @Date: 2021-11-15 17:46:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-15 18:21:58
 * @Description: file content
 */
import { MockMethod } from 'vite-plugin-mock';
import { default as useMockServer, wrapperContext } from '&/_utils';

// 获取路由表
const routingData = [
    {
        "name": "home",
        "path": "/home",
        "meta": {
            "asyn": true,
            "parent": "root"
        },
        "children": [
            {
                "name": "home1",
                "path": "/home1",
                "meta": {
                    "asyn": true,
                    "parent": "home"
                }
            },
            {
                "name": "home2",
                "path": "/home2",
                "meta": {
                    "asyn": true,
                    "parent": "home"
                }
            }
        ]
    }
];
const getRoutingModel = () => ({
    statusCode: 200,
    data: wrapperContext({
        code: 0,
        message: 'ok',
        context: routingData
    })
})
const getRouting = useMockServer({
    url: '/atf/routing/get',
    method: 'get',
    isDelay: true,
    build: getRoutingModel
})

export default [
    getRouting
] as MockMethod[];