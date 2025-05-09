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
 * @interface V1HostConnection
 */
export interface V1HostConnection {
    /**
     *
     * @type {string}
     * @memberof V1HostConnection
     */
    url?: string;
    /**
     *
     * @type {boolean}
     * @memberof V1HostConnection
     */
    insecure?: boolean;
}

/**
 * Check if a given object implements the V1HostConnection interface.
 */
export function instanceOfV1HostConnection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1HostConnectionFromJSON(json: any): V1HostConnection {
    return V1HostConnectionFromJSONTyped(json, false);
}

export function V1HostConnectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HostConnection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'url': !exists(json, 'url') ? undefined : json['url'],
        'insecure': !exists(json, 'insecure') ? undefined : json['insecure'],
    };
}

export function V1HostConnectionToJSON(value?: V1HostConnection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'url': value.url,
        'insecure': value.insecure,
    };
}

