/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc51
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
 * @interface V1EventHistogram
 */
export interface V1EventHistogram {
    /**
     *
     * @type {Array<number>}
     * @memberof V1EventHistogram
     */
    values?: Array<number>;
    /**
     *
     * @type {Array<number>}
     * @memberof V1EventHistogram
     */
    counts?: Array<number>;
}

/**
 * Check if a given object implements the V1EventHistogram interface.
 */
export function instanceOfV1EventHistogram(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1EventHistogramFromJSON(json: any): V1EventHistogram {
    return V1EventHistogramFromJSONTyped(json, false);
}

export function V1EventHistogramFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EventHistogram {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'values': !exists(json, 'values') ? undefined : json['values'],
        'counts': !exists(json, 'counts') ? undefined : json['counts'],
    };
}

export function V1EventHistogramToJSON(value?: V1EventHistogram | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'values': value.values,
        'counts': value.counts,
    };
}

