/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.1.3-rc0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1JoinParam } from './V1JoinParam';
import {
    V1JoinParamFromJSON,
    V1JoinParamFromJSONTyped,
    V1JoinParamToJSON,
} from './V1JoinParam';

/**
 * 
 * @export
 * @interface V1Join
 */
export interface V1Join {
    /**
     * 
     * @type {string}
     * @memberof V1Join
     */
    ref?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Join
     */
    query?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Join
     */
    sort?: string;
    /**
     * 
     * @type {number}
     * @memberof V1Join
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof V1Join
     */
    offset?: number;
    /**
     * 
     * @type {{ [key: string]: V1JoinParam; }}
     * @memberof V1Join
     */
    params?: { [key: string]: V1JoinParam; };
}

/**
 * Check if a given object implements the V1Join interface.
 */
export function instanceOfV1Join(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1JoinFromJSON(json: any): V1Join {
    return V1JoinFromJSONTyped(json, false);
}

export function V1JoinFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Join {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ref': !exists(json, 'ref') ? undefined : json['ref'],
        'query': !exists(json, 'query') ? undefined : json['query'],
        'sort': !exists(json, 'sort') ? undefined : json['sort'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'params': !exists(json, 'params') ? undefined : (mapValues(json['params'], V1JoinParamFromJSON)),
    };
}

export function V1JoinToJSON(value?: V1Join | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ref': value.ref,
        'query': value.query,
        'sort': value.sort,
        'limit': value.limit,
        'offset': value.offset,
        'params': value.params === undefined ? undefined : (mapValues(value.params, V1JoinParamToJSON)),
    };
}

