/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.7.0
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
 * @interface V1HpQLogUniform
 */
export interface V1HpQLogUniform {
    /**
     *
     * @type {string}
     * @memberof V1HpQLogUniform
     */
    kind?: string;
    /**
     *
     * @type {object}
     * @memberof V1HpQLogUniform
     */
    value?: object;
}

/**
 * Check if a given object implements the V1HpQLogUniform interface.
 */
export function instanceOfV1HpQLogUniform(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1HpQLogUniformFromJSON(json: any): V1HpQLogUniform {
    return V1HpQLogUniformFromJSONTyped(json, false);
}

export function V1HpQLogUniformFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HpQLogUniform {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function V1HpQLogUniformToJSON(value?: V1HpQLogUniform | null): any {
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

