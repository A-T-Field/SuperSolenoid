/*
 * @Author: maggot-code
 * @Date: 2022-01-13 16:23:39
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-13 18:49:51
 * @Description: file content
 */
import { isValid } from './isEmpty';

export const fullCharCodeAtPos = (input: string, pos: number) => {
    if (isValid(String.fromCharCode)) return input.codePointAt(pos)
    const code = input.charCodeAt(pos)
    if (code <= 0xd7ff || code >= 0xe000) return code

    const next = input.charCodeAt(pos + 1)
    return (code << 10) + next - 0x35fdc00
}

// 97[a] ~ 122[z] 65[A] ~ 90[Z]
export const permitChar = (code: number) => (code >= 97 && code <= 122) || (code >= 65 && code <= 90);

// 48[0] ~ 59[9]
export const permitNumber = (code: number) => (code >= 48 && code <= 59);

// 36[$]
export const permitPointer = (code: number) => code === 36;

// 64[@]
export const permitCall = (code: number) => code === 64;

// 46[.] 40[(] 44[,] 91[ [ ] 93[ ] ] 41[)]
export const permitScope = (code: number) => (
    code === 44 ||
    code === 46 ||
    code === 40 ||
    code === 41 ||
    code === 91 ||
    code === 93
);

// 61[=] 62[>] 60[<]
export const permitCount = (code: number) => true;

export const permitString = (code: number) => true;