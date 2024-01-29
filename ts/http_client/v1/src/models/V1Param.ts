/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0
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
 * @interface V1Param
 */
export interface V1Param {
    /**
     *
     * @type {object}
     * @memberof V1Param
     */
    value?: object;
    /**
     *
     * @type {string}
     * @memberof V1Param
     */
    ref?: string;
    /**
     *
     * @type {string}
     * @memberof V1Param
     */
    connection?: string;
    /**
     *
     * @type {boolean}
     * @memberof V1Param
     */
    toInit?: boolean;
    /**
     *
     * @type {string}
     * @memberof V1Param
     */
    toEnv?: string;
    /**
     *
     * @type {boolean}
     * @memberof V1Param
     */
    contextOnly?: boolean;
}

/**
 * Check if a given object implements the V1Param interface.
 */
export function instanceOfV1Param(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ParamFromJSON(json: any): V1Param {
    return V1ParamFromJSONTyped(json, false);
}

export function V1ParamFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Param {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'value': !exists(json, 'value') ? undefined : json['value'],
        'ref': !exists(json, 'ref') ? undefined : json['ref'],
        'connection': !exists(json, 'connection') ? undefined : json['connection'],
        'toInit': !exists(json, 'toInit') ? undefined : json['toInit'],
        'toEnv': !exists(json, 'toEnv') ? undefined : json['toEnv'],
        'contextOnly': !exists(json, 'contextOnly') ? undefined : json['contextOnly'],
    };
}

export function V1ParamToJSON(value?: V1Param | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'value': value.value,
        'ref': value.ref,
        'connection': value.connection,
        'toInit': value.toInit,
        'toEnv': value.toEnv,
        'contextOnly': value.contextOnly,
    };
}

