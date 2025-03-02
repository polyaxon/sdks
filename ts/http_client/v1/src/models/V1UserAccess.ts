/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.7.0-rc0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1UserAccessData } from './V1UserAccessData';
import {
    V1UserAccessDataFromJSON,
    V1UserAccessDataFromJSONTyped,
    V1UserAccessDataToJSON,
} from './V1UserAccessData';

/**
 * 
 * @export
 * @interface V1UserAccess
 */
export interface V1UserAccess {
    /**
     * 
     * @type {string}
     * @memberof V1UserAccess
     */
    user?: string;
    /**
     * 
     * @type {V1UserAccessData}
     * @memberof V1UserAccess
     */
    user_data?: V1UserAccessData;
    /**
     * 
     * @type {string}
     * @memberof V1UserAccess
     */
    queue?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1UserAccess
     */
    default_presets?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1UserAccess
     */
    default_presets_ordered?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof V1UserAccess
     */
    namespace?: string;
}

/**
 * Check if a given object implements the V1UserAccess interface.
 */
export function instanceOfV1UserAccess(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1UserAccessFromJSON(json: any): V1UserAccess {
    return V1UserAccessFromJSONTyped(json, false);
}

export function V1UserAccessFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UserAccess {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'user': !exists(json, 'user') ? undefined : json['user'],
        'user_data': !exists(json, 'user_data') ? undefined : V1UserAccessDataFromJSON(json['user_data']),
        'queue': !exists(json, 'queue') ? undefined : json['queue'],
        'default_presets': !exists(json, 'default_presets') ? undefined : json['default_presets'],
        'default_presets_ordered': !exists(json, 'default_presets_ordered') ? undefined : json['default_presets_ordered'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
    };
}

export function V1UserAccessToJSON(value?: V1UserAccess | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user': value.user,
        'user_data': V1UserAccessDataToJSON(value.user_data),
        'queue': value.queue,
        'default_presets': value.default_presets,
        'default_presets_ordered': value.default_presets_ordered,
        'namespace': value.namespace,
    };
}

