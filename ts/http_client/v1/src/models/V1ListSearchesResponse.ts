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
import type { V1Search } from './V1Search';
import {
    V1SearchFromJSON,
    V1SearchFromJSONTyped,
    V1SearchToJSON,
} from './V1Search';

/**
 * 
 * @export
 * @interface V1ListSearchesResponse
 */
export interface V1ListSearchesResponse {
    /**
     * 
     * @type {number}
     * @memberof V1ListSearchesResponse
     */
    count?: number;
    /**
     * 
     * @type {Array<V1Search>}
     * @memberof V1ListSearchesResponse
     */
    results?: Array<V1Search>;
    /**
     * 
     * @type {string}
     * @memberof V1ListSearchesResponse
     */
    previous?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ListSearchesResponse
     */
    next?: string;
}

/**
 * Check if a given object implements the V1ListSearchesResponse interface.
 */
export function instanceOfV1ListSearchesResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ListSearchesResponseFromJSON(json: any): V1ListSearchesResponse {
    return V1ListSearchesResponseFromJSONTyped(json, false);
}

export function V1ListSearchesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListSearchesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(V1SearchFromJSON)),
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'next': !exists(json, 'next') ? undefined : json['next'],
    };
}

export function V1ListSearchesResponseToJSON(value?: V1ListSearchesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(V1SearchToJSON)),
        'previous': value.previous,
        'next': value.next,
    };
}

