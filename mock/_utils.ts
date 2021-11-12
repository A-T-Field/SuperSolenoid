/*
 * @Author: maggot-code
 * @Date: 2021-11-11 10:32:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-12 13:18:19
 * @Description: file content
 */
import type { MethodType } from 'vite-plugin-mock';

import { Buffer } from 'buffer';
import { MockMethod } from 'vite-plugin-mock';
import { urlBreakupParams, randomSection } from '$/utils';

interface MockWrapper {
    code: number;
    message: string;
    context?: any
}
interface MockResult {
    statusCode: number;
    data: MockWrapper
}
interface MockBuildFunction {
    (request: { query: any, body: any }): MockResult
}
interface MockOptions {
    url: string;
    method?: MethodType,
    timeout?: number;
    isDelay?: boolean;
    build: MockBuildFunction
}
interface MockServer {
    (options: MockOptions): MockMethod
}

const wrapperContext = (options: MockWrapper): MockWrapper => {
    return options;
}
const useMockServer: MockServer = (options) => {
    const { url, method, timeout, isDelay, build } = options;
    return {
        url,
        method,
        timeout,
        rawResponse: async (request, response) => {
            await new Promise((resolve, reject) => {
                request.on('data', (chunk) => {
                    try {
                        const buffer = Buffer.from(chunk);
                        const body = JSON.parse(buffer.toString('utf8'));
                        const query = urlBreakupParams(request.url ?? "");

                        return resolve(build({ query, body }));
                    } catch (error) {
                        reject(error)
                    }
                })
            })
                .then(result => {
                    if (isDelay) {
                        setTimeout(() => {
                            const { statusCode, data } = result as MockResult;
                            response.statusCode = statusCode;
                            response.end(JSON.stringify(data))
                        }, randomSection(1000, 1200));
                    } else {
                        const { statusCode, data } = result as MockResult;
                        response.statusCode = statusCode;
                        response.end(JSON.stringify(data))
                    }
                }).catch(error => {
                    response.statusCode = 500;
                    response.end(JSON.stringify(error));
                })
        },
    }
}

export {
    wrapperContext
}

export default useMockServer;