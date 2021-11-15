/*
 * @Author: maggot-code
 * @Date: 2021-11-11 10:21:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-15 17:46:48
 * @Description: file content
 */
import { MockMethod } from 'vite-plugin-mock';
import Mock from 'mockjs';
import { default as useMockServer, wrapperContext } from '&/_utils';

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

// 验证用户token
const checkTokenModel = ({ headers }) => {
    const { token } = headers;
    if (!token) return {
        statusCode: 200,
        data: wrapperContext({
            code: 1003,
            message: '抱歉,请提供身份信息!'
        })
    }

    return {
        statusCode: 200,
        data: wrapperContext({
            code: 0,
            message: 'ok'
        })
    }
}
const checkToken = useMockServer({
    url: '/atf/user/check',
    method: 'get',
    isDelay: true,
    build: checkTokenModel
})

export default [
    login,
    checkToken
] as MockMethod[];