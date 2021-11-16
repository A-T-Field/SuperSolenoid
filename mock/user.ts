/*
 * @Author: maggot-code
 * @Date: 2021-11-11 10:21:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-16 18:30:00
 * @Description: file content
 */
import { MockMethod } from 'vite-plugin-mock';
import Mock from 'mockjs';
import { default as useMockServer, wrapperContext } from '@m/_utils';

const Random = Mock.Random;

// 用户登录
const loginModel = ({ body }) => {
    const { username, password } = body;

    if (username !== 'admin') return {
        statusCode: 200,
        data: wrapperContext({
            code: 1001,
            message: "用户名不正确"
        })
    }
    if (password !== 'admin') return {
        statusCode: 200,
        data: wrapperContext({
            code: 1002,
            message: "密码不正确"
        })
    }

    return {
        statusCode: 200,
        data: wrapperContext({
            code: 0,
            message: "ok",
            context: {
                token: Random.string('upper', 32, 32)
            }
        })
    }
}
const login = useMockServer({
    url: '/atf/login',
    method: 'post',
    isDelay: true,
    build: loginModel
})

// 获取用户权限
const getPowerModel = () => {
    return {
        statusCode: 200,
        data: wrapperContext({
            code: 0,
            message: 'ok',
            context: {
                power: ['worker'],
                // power: ['leader'],
            }
        })
    }
}
const getPower = useMockServer({
    url: '/atf/power/get',
    method: 'get',
    isDelay: true,
    build: getPowerModel
})

export default [
    login,
    getPower
] as MockMethod[];