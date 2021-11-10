/*
 * @Author: maggot-code
 * @Date: 2021-11-10 18:07:04
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-11-10 18:39:06
 * @Description: file content
 */
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

const modules = import.meta.globEager("./data/**/*.ts");

const mockModules: Array<any> = [];

const handlerSetupMockmodules = (key: string) => {
    mockModules.push({ ...modules[key].default });
}

Object.keys(modules).forEach(handlerSetupMockmodules);

function setupProdMockServer() {
    console.log(modules);

    createProdMockServer(mockModules);
}

export default setupProdMockServer;