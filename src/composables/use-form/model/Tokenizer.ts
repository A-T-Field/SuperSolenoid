/*
 * @Author: maggot-code
 * @Date: 2022-01-12 16:00:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-12 18:17:01
 * @Description: file content
 */
import { isString } from '../utils';

const ExtractREX = /^\s*\{\{([\s\S]*)\}\}\s*$/;

class Tokenizer {
    protected done: boolean = false;
    protected effective: boolean = false;
    protected sourctRaw: string = "";

    constructor(input: string) {
        this.initialization(input);
        this.makeTokens();
    }

    protected initialization(sourct: string) {
        if (!isString(sourct)) return;

        const matched = sourct.match(ExtractREX);

        if (!matched) return;

        this.sourctRaw = matched[1].trim();
        this.effective = true;
    }

    protected makeTokens() {
        if (!this.effective) return;

        const sourct = [...this.sourctRaw];

        if (sourct.length <= 0) return;

        const iterator = sourct[Symbol.iterator]();

        do {
            const { value, done } = iterator.next();

            if (done) {
                this.done = done;
                continue;
            }

            console.log(value);
        } while (!this.done);
    }
}

export {
    Tokenizer
}