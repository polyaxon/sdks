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
 * FailureEarlyStoppingSchema specification
 * Early stopping based on failure config.
 * this policy stops based on a percentage of
 * failed runs at every evaluation.
 * @export
 * @interface V1FailureEarlyStopping
 */
export interface V1FailureEarlyStopping {
    /**
     *
     * @type {string}
     * @memberof V1FailureEarlyStopping
     */
    kind?: string;
    /**
     * The percentage of failed runs, at each evaluation interval.
     * e.g. 1 - 99.
     * @type {number}
     * @memberof V1FailureEarlyStopping
     */
    percent?: number;
}

/**
 * Check if a given object implements the V1FailureEarlyStopping interface.
 */
export function instanceOfV1FailureEarlyStopping(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1FailureEarlyStoppingFromJSON(json: any): V1FailureEarlyStopping {
    return V1FailureEarlyStoppingFromJSONTyped(json, false);
}

export function V1FailureEarlyStoppingFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1FailureEarlyStopping {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'percent': !exists(json, 'percent') ? undefined : json['percent'],
    };
}

export function V1FailureEarlyStoppingToJSON(value?: V1FailureEarlyStopping | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'kind': value.kind,
        'percent': value.percent,
    };
}

