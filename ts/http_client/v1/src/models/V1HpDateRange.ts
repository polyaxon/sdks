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
 * @interface V1HpDateRange
 */
export interface V1HpDateRange {
    /**
     *
     * @type {string}
     * @memberof V1HpDateRange
     */
    kind?: string;
    /**
     *
     * @type {object}
     * @memberof V1HpDateRange
     */
    value?: object;
}

/**
 * Check if a given object implements the V1HpDateRange interface.
 */
export function instanceOfV1HpDateRange(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1HpDateRangeFromJSON(json: any): V1HpDateRange {
    return V1HpDateRangeFromJSONTyped(json, false);
}

export function V1HpDateRangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HpDateRange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function V1HpDateRangeToJSON(value?: V1HpDateRange | null): any {
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

