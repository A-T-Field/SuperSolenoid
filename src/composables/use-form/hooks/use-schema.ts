/*
 * @Author: maggot-code
 * @Date: 2021-12-02 17:06:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-02 18:36:12
 * @Description: file content
 */
import type { } from 'vue';
import type { FormProps } from '../types/form';
import type { Formvessel, FormSchema, FormSchemata, FormSchemaMap } from '../types/schema';

import { unref, reactive, computed } from 'vue';
import { isArray } from '@/utils/is';
import { default as uid } from '@/utils/uid';

const handlerSchemaDefault = (schemaRaw: FormSchema): FormSchema => {
    const {
        field,
        vessel
    } = schemaRaw;

    const baseField = field ?? uid();

    const baseVessel: Formvessel = Object.assign({}, vessel, {
        path: baseField,
        label: vessel?.label ?? baseField
    });

    return Object.assign({}, {
        ...schemaRaw,
        vessel: baseVessel
    }, {
        field: baseField
    });
};

const formatSchemaRef = (schemaRaw?: FormSchema | FormSchemata): FormSchemata => {
    return isArray(schemaRaw) ? schemaRaw : [schemaRaw ?? {}];
};

const setSchemaRef = (props: FormProps): FormSchemaMap => {
    const { schema } = unref(props);

    const formschema: FormSchemaMap = new Map();

    formatSchemaRef(schema).forEach(row => {
        const raw = handlerSchemaDefault(row);

        const { field } = raw;

        formschema.set(field!, raw);
    });

    return formschema;
};

function handlerFormSchema(props: FormProps) {
    const formSchemaRef = reactive<FormSchemaMap>(setSchemaRef(props));

    const getFormSchema = computed<FormSchemaMap>(() => {
        return unref(formSchemaRef);
    });

    const setFormSchema = (schemaRaw: FormSchema, index?: number) => {
        const schema = handlerSchemaDefault(schemaRaw);

        const { field } = schema;

        formSchemaRef.has(field!) && console.warn(`${field}已经存在!`);

        formSchemaRef.set(field!, schema);
    };

    const setFormSchemata = (schemataRaw: FormSchemata) => {
        schemataRaw.forEach(setFormSchema);
    };

    return {
        getFormSchema,
        setFormSchema,
        setFormSchemata
    };
}

function useSchema(props: FormProps) {
    return {
        ...handlerFormSchema(props)
    };
};

export default useSchema;