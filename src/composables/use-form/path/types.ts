/*
 * @Author: maggot-code
 * @Date: 2021-12-31 14:41:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-31 17:18:00
 * @Description: file content
 */
export type PathPattern = string | number | Array<string | number>;

export interface PathHandler<T = void> {
    (input: PathPattern, target: object): T;
}