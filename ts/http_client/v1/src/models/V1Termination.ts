/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc10
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Termination specification, it defines how to handle failures, job runtime, and cleanup policy.
 * @export
 * @interface V1Termination
 */
export interface V1Termination {
    /**
     *
     * @type {number}
     * @memberof V1Termination
     */
    maxRetries?: number;
    /**
     *
     * @type {number}
     * @memberof V1Termination
     */
    ttl?: number;
    /**
     *
     * @type {number}
     * @memberof V1Termination
     */
    timeout?: number;
}

/**
 * Check if a given object implements the V1Termination interface.
 */
export function instanceOfV1Termination(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1TerminationFromJSON(json: any): V1Termination {
    return V1TerminationFromJSONTyped(json, false);
}

export function V1TerminationFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Termination {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'maxRetries': !exists(json, 'maxRetries') ? undefined : json['maxRetries'],
        'ttl': !exists(json, 'ttl') ? undefined : json['ttl'],
        'timeout': !exists(json, 'timeout') ? undefined : json['timeout'],
    };
}

export function V1TerminationToJSON(value?: V1Termination | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'maxRetries': value.maxRetries,
        'ttl': value.ttl,
        'timeout': value.timeout,
    };
}

