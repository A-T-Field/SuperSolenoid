/*
 * @Author: maggot-code
 * @Date: 2021-11-15 17:46:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-17 10:33:22
 * @Description: file content
 */
import { MockMethod } from 'vite-plugin-mock';
import { default as useMockServer, wrapperContext } from '@m/_utils';

// 获取路由表
const workerRoutingData = [
    {
        name: "worker",
        path: "/worker",
        redirect: "/worker/apply",
        meta: {
            async: true,
            view: "view-page",
            parent: "root"
        },
        children: [
            {
                name: "apply",
                path: "/apply",
                meta: {
                    async: true,
                    view: "apply",
                    parent: "worker"
                }
            },
            {
                name: "edit",
                path: "/edit",
                meta: {
                    async: true,
                    view: "edit",
                    parent: "worker"
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