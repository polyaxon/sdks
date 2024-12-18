/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.5.3
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1Activity } from './V1Activity';
import {
    V1ActivityFromJSON,
    V1ActivityFromJSONTyped,
    V1ActivityToJSON,
} from './V1Activity';

/**
 * 
 * @export
 * @interface V1ListActivitiesResponse
 */
export interface V1ListActivitiesResponse {
    /**
     * 
     * @type {number}
     * @memberof V1ListActivitiesResponse
     */
    count?: number;
    /**
     * 
     * @type {Array<V1Activity>}
     * @memberof V1ListActivitiesResponse
     */
    results?: Array<V1Activity>;
    /**
     * 
     * @type {string}
     * @memberof V1ListActivitiesResponse
     */
    previous?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ListActivitiesResponse
     */
    next?: string;
}

/**
 * Check if a given object implements the V1ListActivitiesResponse interface.
 */
export function instanceOfV1ListActivitiesResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ListActivitiesResponseFromJSON(json: any): V1ListActivitiesResponse {
    return V1ListActivitiesResponseFromJSONTyped(json, false);
}

export function V1ListActivitiesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListActivitiesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(V1ActivityFromJSON)),
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'next': !exists(json, 'next') ? undefined : json['next'],
    };
}

export function V1ListActivitiesResponseToJSON(value?: V1ListActivitiesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(V1ActivityToJSON)),
        'previous': value.previous,
        'next': value.next,
    };
}

