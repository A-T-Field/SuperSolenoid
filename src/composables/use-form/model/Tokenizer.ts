/*
 * @Author: maggot-code
 * @Date: 2022-01-13 16:39:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-13 16:55:49
 * @Description: file content
 */
import { fullCharCodeAtPos } from '../utils';

class Tokenizer {
    protected source: string = "";
    protected state: {
        type: string;
        pos: number;
        value?: any;
    }

    constructor(input: string) {
        this.source = input;
        this.state = {
            type: "",
            pos: 0
        }
        this.setupTag();
    }

    protected setupTag() {
        const source = [...this.source];
        const len = source.length;

        while (this.state.pos < len) {
            const char = source[this.state.pos];
            const code = this.getCode();
            console.log(char, code);


            ++this.state.pos;
        }
    }

    getCode(pos = this.state.pos) {
        return fullCharCodeAtPos(this.source, pos);
    }
}

export {
    Tokenizer
}