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
 * @interface V1EventModel
 */
export interface V1EventModel {
    /**
     * 
     * @type {string}
     * @memberof V1EventModel
     */
    framework?: string;
    /**
     * 
     * @type {string}
     * @memberof V1EventModel
     */
    path?: string;
    /**
     * 
     * @type {object}
     * @memberof V1EventModel
     */
    spec?: object;
}

/**
 * Check if a given object implements the V1EventModel interface.
 */
export function instanceOfV1EventModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1EventModelFromJSON(json: any): V1EventModel {
    return V1EventModelFromJSONTyped(json, false);
}

export function V1EventModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EventModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'framework': !exists(json, 'framework') ? undefined : json['framework'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'spec': !exists(json, 'spec') ? undefined : json['spec'],
    };
}

export function V1EventModelToJSON(value?: V1EventModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'framework': value.framework,
        'path': value.path,
        'spec': value.spec,
    };
}

