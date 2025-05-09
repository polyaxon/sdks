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
 * @interface V1HubRef
 */
export interface V1HubRef {
    /**
     *
     * @type {string}
     * @memberof V1HubRef
     */
    kind?: string;
    /**
     *
     * @type {string}
     * @memberof V1HubRef
     */
    name?: string;
}

/**
 * Check if a given object implements the V1HubRef interface.
 */
export function instanceOfV1HubRef(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1HubRefFromJSON(json: any): V1HubRef {
    return V1HubRefFromJSONTyped(json, false);
}

export function V1HubRefFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HubRef {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function V1HubRefToJSON(value?: V1HubRef | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'kind': value.kind,
        'name': value.name,
    };
}

