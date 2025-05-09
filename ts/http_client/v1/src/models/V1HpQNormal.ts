/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.8.0
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
 * @interface V1HpQNormal
 */
export interface V1HpQNormal {
    /**
     *
     * @type {string}
     * @memberof V1HpQNormal
     */
    kind?: string;
    /**
     *
     * @type {object}
     * @memberof V1HpQNormal
     */
    value?: object;
}

/**
 * Check if a given object implements the V1HpQNormal interface.
 */
export function instanceOfV1HpQNormal(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1HpQNormalFromJSON(json: any): V1HpQNormal {
    return V1HpQNormalFromJSONTyped(json, false);
}

export function V1HpQNormalFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HpQNormal {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function V1HpQNormalToJSON(value?: V1HpQNormal | null): any {
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

