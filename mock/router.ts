/*
 * @Author: maggot-code
 * @Date: 2021-11-15 17:46:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-19 16:11:45
 * @Description: file content
 */
import { MockMethod } from 'vite-plugin-mock';
import { default as useMockServer, wrapperContext } from '@m/_utils';

// 获取路由表
const workerRoutingData = [
    {
        name: "report",
        path: '/report',
        redirect: '/report/add',
        meta: {
            async: true,
            title: "工单报表",
            view: "home-page",
            isNavRoute: true,
            hasPower: true,
        },
        children: [
            {
                name: 'report_add',
                path: '/report/add',
                meta: {
                    async: true,
                    title: "报表新增",
                    view: "report-add",
                    parent: "report",
                    isNavRoute: true
                }
            },
            {
                name: "report_edit",
                path: '/report/edit',
                meta: {
                    async: true,
                    title: "报表修改",
                    view: "report-edit",
                    parent: "report",
                    isNavRoute: true
                }
            }
        ]
    },
    {
        name: 'log',
        path: '/log',
        redirect: '/log/info',
        meta: {
            async: true,
            title: "工作日志",
            view: "home-page",
            isNavRoute: true,
            hasPower: true,
        },
        children: [
            {
                name: 'info',
                path: '/log/info',
                meta: {
                    async: true,
                    title: "信息级别",
                    view: "info",
                    parent: 'log',
                    isMenuRoute: true
                }
            },
            {
                name: 'warning',
                path: '/log/warning',
                meta: {
                    async: true,
                    title: "报警级别",
                    view: "warning",
                    parent: 'log',
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