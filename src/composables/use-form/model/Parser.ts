/*
 * @Author: maggot-code
 * @Date: 2022-01-13 16:39:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-14 15:03:44
 * @Description: file content
 */
class Parser {
    protected effective: boolean = false;
    protected source: string = "";

    constructor(input: string,) {
        this.source = input;
    }
}

export {
    Parser
}