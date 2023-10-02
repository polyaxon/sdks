/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc50
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
 * @interface V1JoinParam
 */
export interface V1JoinParam {
    /**
     *
     * @type {string}
     * @memberof V1JoinParam
     */
    value?: string;
    /**
     *
     * @type {string}
     * @memberof V1JoinParam
     */
    connection?: string;
    /**
     *
     * @type {boolean}
     * @memberof V1JoinParam
     */
    toInit?: boolean;
    /**
     *
     * @type {string}
     * @memberof V1JoinParam
     */
    toEnv?: string;
    /**
     *
     * @type {boolean}
     * @memberof V1JoinParam
     */
    contextOnly?: boolean;
}

/**
 * Check if a given object implements the V1JoinParam interface.
 */
export function instanceOfV1JoinParam(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1JoinParamFromJSON(json: any): V1JoinParam {
    return V1JoinParamFromJSONTyped(json, false);
}

export function V1JoinParamFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1JoinParam {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'value': !exists(json, 'value') ? undefined : json['value'],
        'connection': !exists(json, 'connection') ? undefined : json['connection'],
        'toInit': !exists(json, 'toInit') ? undefined : json['toInit'],
        'toEnv': !exists(json, 'toEnv') ? undefined : json['toEnv'],
        'contextOnly': !exists(json, 'contextOnly') ? undefined : json['contextOnly'],
    };
}

export function V1JoinParamToJSON(value?: V1JoinParam | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'value': value.value,
        'connection': value.connection,
        'toInit': value.toInit,
        'toEnv': value.toEnv,
        'contextOnly': value.contextOnly,
    };
}

