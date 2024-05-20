/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.2.0-rc0
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
 * @interface V1GitType
 */
export interface V1GitType {
    /**
     * 
     * @type {string}
     * @memberof V1GitType
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof V1GitType
     */
    revision?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1GitType
     */
    flags?: Array<string>;
}

/**
 * Check if a given object implements the V1GitType interface.
 */
export function instanceOfV1GitType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1GitTypeFromJSON(json: any): V1GitType {
    return V1GitTypeFromJSONTyped(json, false);
}

export function V1GitTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1GitType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': !exists(json, 'url') ? undefined : json['url'],
        'revision': !exists(json, 'revision') ? undefined : json['revision'],
        'flags': !exists(json, 'flags') ? undefined : json['flags'],
    };
}

export function V1GitTypeToJSON(value?: V1GitType | null): any {
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

