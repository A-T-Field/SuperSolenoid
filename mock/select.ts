/*
 * @Author: maggot-code
 * @Date: 2021-12-23 13:40:06
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-11 16:19:10
 * @Description: file content
 */
import { MockMethod } from 'vite-plugin-mock';
import { default as useMockServer, wrapperContext } from '@m/_utils';

// 根据省字段获取市区列表
const getCityModel = ({ query }) => {
    const { code } = query;
    if (code === "001") {
        return {
            statusCode: 200,
            data: wrapperContext({
                code: 0,
                message: "ok",
                context: [
                    {
                        type: "string",
                        label: "石家庄市",
                        value: "010"
                    },
                    {
                        type: "string",
                        label: "保定市",
                        value: "011"
                    }
                ]
            })
        }
    }

    if (code === "002") {
        return {
            statusCode: 200,
            data: wrapperContext({
                code: 0,
                message: "ok",
                context: [
                    {
                        type: "string",
                        label: "长春市",
                        value: "012"
                    },
                    {
                        type: "string",
                        label: "吉林市",
                        value: "013"
                    }
                ]
            })
        }
    }

    if (code === "010") {
        return {
            statusCode: 200,
            data: wrapperContext({
                code: 0,
                message: "ok",
                context: [
                    {
                        type: "string",
                        label: "石家庄街道111",
                        value: "110"
                    },
                    {
                        type: "string",
                        label: "石家庄街道222",
                        value: "111"
                    }
                ]
            })
        }
    }
    if (code === "011") {
        return {
            statusCode: 200,
            data: wrapperContext({
                code: 0,
                message: "ok",
                context: [
                    {
                        type: "string",
                        label: "保定街道111",
                        value: "112"
                    },
                    {
                        type: "string",
                        label: "保定街道222",
                        value: "113"
                    }
                ]
            })
        }
    }
    if (code === "012") {
        return {
            statusCode: 200,
            data: wrapperContext({
                code: 0,
                message: "ok",
                context: [
                    {
                        type: "string",
                        label: "长春街道111",
                        value: "114"
                    },
                    {
                        type: "string",
                        label: "长春街道222",
                        value: "115"
                    }
                ]
            })
        }
    }
    if (code === "013") {
        return {
            statusCode: 200,
            data: wrapperContext({
                code: 0,
                message: "ok",
                context: [
                    {
                        type: "string",
                        label: "吉林街道111",
                        value: "116"
                    },
                    {
                        type: "string",
                        label: "吉林街道222",
                        value: "117"
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
    isDelay: false,
    build: getCityModel
});

export default [
    getCity
] as MockMethod[];