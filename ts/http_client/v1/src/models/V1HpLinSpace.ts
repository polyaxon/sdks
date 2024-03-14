/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.1.3-rc1
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
 * @interface V1HpLinSpace
 */
export interface V1HpLinSpace {
    /**
     * 
     * @type {string}
     * @memberof V1HpLinSpace
     */
    kind?: string;
    /**
     * 
     * @type {object}
     * @memberof V1HpLinSpace
     */
    value?: object;
}

/**
 * Check if a given object implements the V1HpLinSpace interface.
 */
export function instanceOfV1HpLinSpace(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1HpLinSpaceFromJSON(json: any): V1HpLinSpace {
    return V1HpLinSpaceFromJSONTyped(json, false);
}

export function V1HpLinSpaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HpLinSpace {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function V1HpLinSpaceToJSON(value?: V1HpLinSpace | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kind': value.kind,
        'value': value.value,
    };
}

