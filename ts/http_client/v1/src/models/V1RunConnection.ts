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
 * @interface V1RunConnection
 */
export interface V1RunConnection {
    /**
     * 
     * @type {string}
     * @memberof V1RunConnection
     */
    uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof V1RunConnection
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof V1RunConnection
     */
    kind?: string;
}

/**
 * Check if a given object implements the V1RunConnection interface.
 */
export function instanceOfV1RunConnection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1RunConnectionFromJSON(json: any): V1RunConnection {
    return V1RunConnectionFromJSONTyped(json, false);
}

export function V1RunConnectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1RunConnection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
    };
}

export function V1RunConnectionToJSON(value?: V1RunConnection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'name': value.name,
        'kind': value.kind,
    };
}

