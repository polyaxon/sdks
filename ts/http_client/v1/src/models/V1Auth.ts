/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.0.0-rc26
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
 * @interface V1Auth
 */
export interface V1Auth {
    /**
     * 
     * @type {string}
     * @memberof V1Auth
     */
    token?: string;
}

/**
 * Check if a given object implements the V1Auth interface.
 */
export function instanceOfV1Auth(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1AuthFromJSON(json: any): V1Auth {
    return V1AuthFromJSONTyped(json, false);
}

export function V1AuthFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Auth {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'token': !exists(json, 'token') ? undefined : json['token'],
    };
}

export function V1AuthToJSON(value?: V1Auth | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'token': value.token,
    };
}

