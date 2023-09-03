/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc38
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
 * @interface V1HpQLogNormal
 */
export interface V1HpQLogNormal {
    /**
     *
     * @type {string}
     * @memberof V1HpQLogNormal
     */
    kind?: string;
    /**
     *
     * @type {object}
     * @memberof V1HpQLogNormal
     */
    value?: object;
}

/**
 * Check if a given object implements the V1HpQLogNormal interface.
 */
export function instanceOfV1HpQLogNormal(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1HpQLogNormalFromJSON(json: any): V1HpQLogNormal {
    return V1HpQLogNormalFromJSONTyped(json, false);
}

export function V1HpQLogNormalFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HpQLogNormal {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function V1HpQLogNormalToJSON(value?: V1HpQLogNormal | null): any {
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

