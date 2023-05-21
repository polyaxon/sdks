/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc16
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface V1IO
 */
export interface V1IO {
    /**
     *
     * @type {string}
     * @memberof V1IO
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof V1IO
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof V1IO
     */
    type?: string;
    /**
     *
     * @type {object}
     * @memberof V1IO
     */
    value?: object;
    /**
     *
     * @type {boolean}
     * @memberof V1IO
     */
    isOptional?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof V1IO
     */
    isList?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof V1IO
     */
    isFlag?: boolean;
    /**
     *
     * @type {string}
     * @memberof V1IO
     */
    argFormat?: string;
    /**
     *
     * @type {boolean}
     * @memberof V1IO
     */
    delayValidation?: boolean;
    /**
     *
     * @type {Array<object>}
     * @memberof V1IO
     */
    options?: Array<object>;
    /**
     *
     * @type {string}
     * @memberof V1IO
     */
    connection?: string;
    /**
     *
     * @type {boolean}
     * @memberof V1IO
     */
    toInit?: boolean;
    /**
     *
     * @type {string}
     * @memberof V1IO
     */
    toEnv?: string;
}

/**
 * Check if a given object implements the V1IO interface.
 */
export function instanceOfV1IO(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1IOFromJSON(json: any): V1IO {
    return V1IOFromJSONTyped(json, false);
}

export function V1IOFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1IO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'isOptional': !exists(json, 'isOptional') ? undefined : json['isOptional'],
        'isList': !exists(json, 'isList') ? undefined : json['isList'],
        'isFlag': !exists(json, 'isFlag') ? undefined : json['isFlag'],
        'argFormat': !exists(json, 'argFormat') ? undefined : json['argFormat'],
        'delayValidation': !exists(json, 'delayValidation') ? undefined : json['delayValidation'],
        'options': !exists(json, 'options') ? undefined : json['options'],
        'connection': !exists(json, 'connection') ? undefined : json['connection'],
        'toInit': !exists(json, 'toInit') ? undefined : json['toInit'],
        'toEnv': !exists(json, 'toEnv') ? undefined : json['toEnv'],
    };
}

export function V1IOToJSON(value?: V1IO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'name': value.name,
        'description': value.description,
        'type': value.type,
        'value': value.value,
        'isOptional': value.isOptional,
        'isList': value.isList,
        'isFlag': value.isFlag,
        'argFormat': value.argFormat,
        'delayValidation': value.delayValidation,
        'options': value.options,
        'connection': value.connection,
        'toInit': value.toInit,
        'toEnv': value.toEnv,
    };
}

