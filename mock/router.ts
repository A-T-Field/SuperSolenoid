/*
 * @Author: maggot-code
 * @Date: 2021-11-15 17:46:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-12 09:47:38
 * @Description: file content
 */
import { MockMethod } from 'vite-plugin-mock';
import { default as useMockServer, wrapperContext } from '@m/_utils';

// 获取路由表
const workerRoutingData = [
    {
        name: "string_to",
        path: "/st",
        redirect: '/st/code',
        meta: {
            async: true,
            view: 'home-page',
            title: "字符串转换",
            isMenuRoute: true,
            hasPower: true
        },
        children: [
            {
                name: 'string_to_code',
                path: '/st/code',
                meta: {
                    async: true,
                    view: 'string-to-code',
                    parent: 'string_to',
                    title: '字符串转换代码',
                    isMenuRoute: true,
                }
            }
        ]
    },
    {
        name: 'form',
        path: "/form",
        redirect: '/form/hand',
        meta: {
            async: true,
            view: 'home-page',
            title: '表单',
            isMenuRoute: true,
            hasPower: true,
        },
        children: [
            {
                name: 'form_hand',
                path: '/form/hand',
                meta: {
                    async: true,
                    view: 'form-hand',
                    parent: 'form',
                    title: '表单-基础',
                    isMenuRoute: true,
                }
            },
            {
                name: 'form_schema',
                path: '/form/schema',
                meta: {
                    async: true,
                    view: 'form-schema',
                    parent: 'form',
                    title: '表单-搭建',
                    isMenuRoute: true,
                }
            }
        ]
    },
    {
        name: 'table',
        path: "/table",
        redirect: '/table/hand',
        meta: {
            async: true,
            view: 'home-page',
            title: '表格',
            isMenuRoute: true,
            hasPower: true,
        },
        children: [
            {
                name: 'table_hand',
                path: '/table/hand',
                meta: {
                    async: true,
                    view: 'table-hand',
                    parent: 'table',
                    title: '表格-基础',
                    isMenuRoute: true,
                }
            },
            {
                name: 'table_schema',
                path: '/table/schema',
                meta: {
                    async: true,
                    view: 'table-schema',
                    parent: 'table',
                    title: '表格-搭建',
                    isMenuRoute: true,
                }
            }
        ]
    },
    {
        name: "json",
        path: "/json",
        redirect: "/json/test",
        meta: {
            async: true,
            view: "home-page",
            title: "JSON",
            isMenuRoute: true,
            hasPower: true
        },
        children: [
            {
                name: "json_test",
                path: '/json/test',
                meta: {
                    async: true,
                    view: "json-test",
                    parent: "json",
                    title: "JSON-测试",
                    isMenuRoute: true
                }
            }
        ]
    }
];
const leaderRoutingData = [];

const getRoutingModel = ({ body }) => {
    const { power } = body;
    if (power.includes('worker')) {
        return {
            statusCode: 200,
            data: wrapperContext({
                code: 0,
                message: 'ok',
                context: workerRoutingData
            })
        }
    }

    if (power.includes('leader')) {
        return {
            statusCode: 200,
            data: wrapperContext({
                code: 0,
                message: 'ok',
                context: leaderRoutingData
            })
        }
    }

    return {
        statusCode: 200,
        data: wrapperContext({
            code: 2001,
            message: '没有找到对应路由组',
        })
    }
}
const getRouting = useMockServer({
    url: '/atf/routing/get',
    method: 'post',
    isDelay: true,
    build: getRoutingModel
})

export default [
    getRouting
] as MockMethod[];