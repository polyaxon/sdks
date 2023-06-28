/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc24
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
 * @interface V1GitConnection
 */
export interface V1GitConnection {
    /**
     *
     * @type {string}
     * @memberof V1GitConnection
     */
    url?: string;
    /**
     *
     * @type {boolean}
     * @memberof V1GitConnection
     */
    revision?: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof V1GitConnection
     */
    flags?: Array<string>;
}

/**
 * Check if a given object implements the V1GitConnection interface.
 */
export function instanceOfV1GitConnection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1GitConnectionFromJSON(json: any): V1GitConnection {
    return V1GitConnectionFromJSONTyped(json, false);
}

export function V1GitConnectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1GitConnection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'url': !exists(json, 'url') ? undefined : json['url'],
        'revision': !exists(json, 'revision') ? undefined : json['revision'],
        'flags': !exists(json, 'flags') ? undefined : json['flags'],
    };
}

export function V1GitConnectionToJSON(value?: V1GitConnection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'url': value.url,
        'revision': value.revision,
        'flags': value.flags,
    };
}

