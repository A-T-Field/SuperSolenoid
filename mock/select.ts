/*
 * @Author: maggot-code
 * @Date: 2021-12-23 13:40:06
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-23 14:29:08
 * @Description: file content
 */
import { MockMethod } from 'vite-plugin-mock';
import { default as useMockServer, wrapperContext } from '@m/_utils';

// 根据省字段获取市区列表
const getCityModel = ({ query }) => {
    console.log(query);
    const { code } = query;
    if (code === "hb") {
        return {
            statusCode: 200,
            data: wrapperContext({
                code: 0,
                message: "ok",
                context: [
                    {
                        label: "石家庄市",
                        value: "sjzs"
                    },
                    {
                        label: "保定市",
                        value: "bds"
                    }
                ]
            })
        }
    }

    if (code === "db") {
        return {
            statusCode: 200,
            data: wrapperContext({
                code: 0,
                message: "ok",
                context: [
                    {
                        label: "长春市",
                        value: "ccs"
                    },
                    {
                        label: "吉林市",
                        value: "jls"
                    }
                ]
            })
        }
    }

    return {
        statusCode: 200,
        data: wrapperContext({
            code: 0,
            message: "ok",
            context: []
        })
    }
}
const getCity = useMockServer({
    url: '/atf/city/get',
    method: 'get',
    isDelay: true,
    build: getCityModel
});

export default [
    getCity
] as MockMethod[];