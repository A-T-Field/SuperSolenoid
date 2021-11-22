/*
 * @Author: maggot-code
 * @Date: 2021-11-15 17:46:34
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-22 00:03:57
 * @Description: file content
 */
import { MockMethod } from 'vite-plugin-mock';
import { default as useMockServer, wrapperContext } from '@m/_utils';

// 获取路由表
const workerRoutingData = [
    {
        name: 'report',
        path: "/report",
        redirect: '/report/add',
        meta: {
            async: true,
            view: 'home-page',
            title: '工单报表',
            isMenuRoute: true,
            hasPower: true,
        },
        children: [
            {
                name: 'report_add',
                path: '/report/add',
                meta: {
                    async: true,
                    view: 'report-add',
                    parent: 'report',
                    title: '工单报表-新增',
                    isMenuRoute: true,
                }
            },
            {
                name: 'report_edit',
                path: '/report/edit',
                meta: {
                    async: true,
                    view: 'report-edit',
                    parent: 'report',
                    title: '工单报表-编辑',
                    isMenuRoute: true,
                }
            }
        ]
    },
    {
        name: 'log',
        path: '/log',
        redirect: '/report/warn',
        meta: {
            async: true,
            view: 'home-page',
            title: '工单日志',
            isMenuRoute: true,
            hasPower: true,
        },
        children: [
            {
                name: 'log_warn',
                path: '/log/warn',
                meta: {
                    async: true,
                    view: 'warning',
                    parent: 'log',
                    title: '工单日志-报警',
                    isMenuRoute: true,
                }
            },
            {
                name: 'log_info',
                path: '/log/info',
                meta: {
                    async: true,
                    view: 'info',
                    parent: 'log',
                    title: '工单日志-信息',
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