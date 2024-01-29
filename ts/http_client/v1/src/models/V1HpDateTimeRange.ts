/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc17
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
 * @interface V1HpDateTimeRange
 */
export interface V1HpDateTimeRange {
    /**
     *
     * @type {string}
     * @memberof V1HpDateTimeRange
     */
    kind?: string;
    /**
     *
     * @type {object}
     * @memberof V1HpDateTimeRange
     */
    value?: object;
}

/**
 * Check if a given object implements the V1HpDateTimeRange interface.
 */
export function instanceOfV1HpDateTimeRange(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1HpDateTimeRangeFromJSON(json: any): V1HpDateTimeRange {
    return V1HpDateTimeRangeFromJSONTyped(json, false);
}

export function V1HpDateTimeRangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HpDateTimeRange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function V1HpDateTimeRangeToJSON(value?: V1HpDateTimeRange | null): any {
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

