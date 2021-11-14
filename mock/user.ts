/*
 * @Author: maggot-code
 * @Date: 2021-11-11 10:21:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-14 21:30:26
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

// 用户校验身份是否可用
const checkUserModel = ({ headers }) => {
    return {
        statusCode: 200,
        data: wrapperContext({
            code: 0,
            message: 'ok',
        })
    }
}
const checkUser = useMockServer({
    url: '/atf/check/user',
    method: 'get',
    isDelay: true,
    build: checkUserModel
})


export default [
    login,
    checkUser
] as MockMethod[];