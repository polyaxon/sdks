/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.1.2-rc0
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
 * @interface V1User
 */
export interface V1User {
    /**
     * 
     * @type {string}
     * @memberof V1User
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof V1User
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof V1User
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof V1User
     */
    kind?: string;
    /**
     * 
     * @type {number}
     * @memberof V1User
     */
    theme?: number;
    /**
     * 
     * @type {string}
     * @memberof V1User
     */
    organization?: string;
}

/**
 * Check if a given object implements the V1User interface.
 */
export function instanceOfV1User(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1UserFromJSON(json: any): V1User {
    return V1UserFromJSONTyped(json, false);
}

export function V1UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1User {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'username': !exists(json, 'username') ? undefined : json['username'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'theme': !exists(json, 'theme') ? undefined : json['theme'],
        'organization': !exists(json, 'organization') ? undefined : json['organization'],
    };
}

export function V1UserToJSON(value?: V1User | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'username': value.username,
        'email': value.email,
        'name': value.name,
        'kind': value.kind,
        'theme': value.theme,
        'organization': value.organization,
    };
}

