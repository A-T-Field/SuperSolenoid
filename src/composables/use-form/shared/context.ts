/*
 * @Author: maggot-code
 * @Date: 2022-01-05 16:39:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-01-05 16:39:20
 * @Description: file content
 */
import type { InjectionKey, Ref } from 'vue'

import { Form, GeneralField } from '@formily/core'
import { Schema } from '@formily/json-schema'
import { ISchemaFieldVueFactoryOptions } from '../types'

export const FormSymbol: InjectionKey<Ref<Form>> = Symbol('form')
export const FieldSymbol: InjectionKey<Ref<GeneralField>> = Symbol('field')
export const SchemaMarkupSymbol: InjectionKey<Ref<Schema>> =
    Symbol('schemaMarkup')
export const SchemaSymbol: InjectionKey<Ref<Schema>> = Symbol('schema')
export const SchemaExpressionScopeSymbol: InjectionKey<
    Ref<Record<string, any>>
> = Symbol('schemaExpression')
export const SchemaOptionsSymbol: InjectionKey<
    Ref<ISchemaFieldVueFactoryOptions>
> = Symbol('schemaOptions')