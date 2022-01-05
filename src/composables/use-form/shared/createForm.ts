/*
 * @Author: maggot-code
 * @Date: 2022-01-05 16:59:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-05 17:00:00
 * @Description: file content
 */
import { createForm } from '@formily/core'
import { markRaw } from 'vue'

const createRawForm = (...args: Parameters<typeof createForm>) => {
    const form = createForm(...args)
    return markRaw(form)
}

export { createRawForm as createForm }