/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc17
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
 * @interface V1HpLogSpace
 */
export interface V1HpLogSpace {
    /**
     *
     * @type {string}
     * @memberof V1HpLogSpace
     */
    kind?: string;
    /**
     *
     * @type {object}
     * @memberof V1HpLogSpace
     */
    value?: object;
}

/**
 * Check if a given object implements the V1HpLogSpace interface.
 */
export function instanceOfV1HpLogSpace(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1HpLogSpaceFromJSON(json: any): V1HpLogSpace {
    return V1HpLogSpaceFromJSONTyped(json, false);
}

export function V1HpLogSpaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HpLogSpace {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function V1HpLogSpaceToJSON(value?: V1HpLogSpace | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'kind': value.kind,
        'value': value.value,
    };
}

