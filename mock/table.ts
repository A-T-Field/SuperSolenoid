/*
 * @Author: maggot-code
 * @Date: 2021-11-22 15:27:26
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-29 13:10:57
 * @Description: file content
 */
import { MockMethod } from 'vite-plugin-mock';
import Mock from 'mockjs';
import { default as useMockServer, wrapperContext } from '@m/_utils';

const Random = Mock.Random;

// 生成表格数据
const getTableDataModel = () => {
    const data: Array<any> = [];
    for (let index = 0; index < 10; index++) {
        data.push({
            id: Random.id(),
            name: Random.cname(),
            date: Random.date('yyyy-MM-dd'),
            time: Random.time('HH:mm:ss'),
            img: Random.image('200x200', Random.color(), Random.color(), Random.first()),
        })
    }
    return {
        statusCode: 200,
        data: wrapperContext({
            code: 0,
            message: 'ok',
            context: data
        })
    }
}
const getTableData = useMockServer({
    url: '/atf/table/get',
    method: 'get',
    isDelay: true,
    build: getTableDataModel
})

export default [
    getTableData
] as MockMethod[];