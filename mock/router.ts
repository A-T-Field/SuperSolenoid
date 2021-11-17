/*
 * @Author: maggot-code
 * @Date: 2021-11-15 17:46:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-17 18:04:40
 * @Description: file content
 */
import { MockMethod } from 'vite-plugin-mock';
import { default as useMockServer, wrapperContext } from '@m/_utils';

// 获取路由表
const workerRoutingData = [
    {
        name: "worker",
        path: "/home/worker",
        redirect: "/home/worker/apply",
        meta: {
            async: true,
            view: "home-page",
            parent: "home",
            title: "工作室",
            isNavRoute: true,
        },
        children: [
            {
                name: "apply",
                path: "/apply",
                meta: {
                    async: true,
                    view: "apply",
                    parent: "worker",
                    title: "申报",
                    isMenuRoute: true,
                }
            },
            {
                name: "edit",
                path: "/edit",
                meta: {
                    async: true,
                    view: "edit",
                    parent: "worker",
                    title: "修改申报",
                    isMenuRoute: true,
                }
            }
        ]
    },
    {
        name: "log",
        path: '/home/log',
        redirect: "/home/log/view",
        meta: {
            async: true,
            view: "home-page",
            parent: "home",
            title: "工作日志",
            isNavRoute: true,
        },
        children: [
            {
                name: 'view',
                path: '/view',
                meta: {
                    async: true,
                    view: "view",
                    parent: "log",
                    title: "日志查看",
                    isMenuRoute: true,
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