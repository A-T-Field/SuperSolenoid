/*
 * @Author: maggot-code
 * @Date: 2021-11-11 11:12:13
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-11 11:12:13
 * @Description: file content
 */
export enum HttpCodeEnum {
    // 1xx 接收的请求正在处理 信息性状态码
    HTTP_GO_ON = 100,
    HTTP_SWITCH = 101,
    // 2xx 请求正常处理完成 成功性状态码
    HTTP_SUCCESS = 200,
    HTTP_CREATED = 201,
    HTTP_HANDLER = 204,
    // 3xx 需要进行附加操作才能完成处理 重定向
    HTTP_MOVED = 301,
    HTTP_FOUND = 302,
    // 4xx 服务器无法对请求完成处理 客户端错误性状态码
    HTTP_BAD_REQUEST = 400,
    HTTP_HAS_ATTESTATION = 401,
    HTTP_NOT_POWER = 403,
    HTTP_NOT_FOUND = 404,
    // 5xx 服务器对请求处理时出错 服务端错误性状态码
    HTTP_SERVER_ERROR = 500,
    HTTP_BAD_GATEWAY = 502,
    HTTP_SERVICE_BUSY = 503,
}

/**
 * @description: 请求方法映射
 */
export enum RequestMethodsEnum {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH'
}

/**
 * @description: 请求体类型映射
 */
export enum ContentTypeEnum {
    JSON = 'application/json; charset=UTF-8',
    TEXT = 'text/plain; charset=UTF-8',
    FORM_URL_ENCODED = 'application/x-www-form-urlencoded; charset=UTF-8',
    FORM_DATA = 'multipart/form-data; charset=UTF-8'
}