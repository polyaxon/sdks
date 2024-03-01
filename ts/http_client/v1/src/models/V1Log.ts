/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.2
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
 * @interface V1Log
 */
export interface V1Log {
    /**
     *
     * @type {Date}
     * @memberof V1Log
     */
    timestamp?: Date;
    /**
     *
     * @type {string}
     * @memberof V1Log
     */
    node?: string;
    /**
     *
     * @type {string}
     * @memberof V1Log
     */
    pod?: string;
    /**
     *
     * @type {string}
     * @memberof V1Log
     */
    container?: string;
    /**
     *
     * @type {string}
     * @memberof V1Log
     */
    value?: string;
}

/**
 * Check if a given object implements the V1Log interface.
 */
export function instanceOfV1Log(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1LogFromJSON(json: any): V1Log {
    return V1LogFromJSONTyped(json, false);
}

export function V1LogFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Log {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'timestamp': !exists(json, 'timestamp') ? undefined : (new Date(json['timestamp'])),
        'node': !exists(json, 'node') ? undefined : json['node'],
        'pod': !exists(json, 'pod') ? undefined : json['pod'],
        'container': !exists(json, 'container') ? undefined : json['container'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function V1LogToJSON(value?: V1Log | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'timestamp': value.timestamp === undefined ? undefined : (value.timestamp.toISOString()),
        'node': value.node,
        'pod': value.pod,
        'container': value.container,
        'value': value.value,
    };
}

