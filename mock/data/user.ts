/*
 * @Author: maggot-code
 * @Date: 2021-11-10 18:13:40
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-10 18:16:19
 * @Description: file content
 */
import Mock from 'mockjs';

const Random = Mock.Random;

const token = Random.string('upper', 32, 32);

const Login = {
    url: '/atf/login',
    timeout: 1000,
    method: 'POST',
    response: () => {
        return token;
    }
};

export default [
    Login
];