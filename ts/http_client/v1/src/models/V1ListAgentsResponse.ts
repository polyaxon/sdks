/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *    
 *
 * The version of the OpenAPI document: 2.3.1
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1Agent } from './V1Agent';
import {
    V1AgentFromJSON,
    V1AgentFromJSONTyped,
    V1AgentToJSON,
} from './V1Agent';

/**
 * 
 * @export
 * @interface V1ListAgentsResponse
 */
export interface V1ListAgentsResponse {
    /**
     * 
     * @type {number}
     * @memberof V1ListAgentsResponse
     */
    count?: number;
    /**
     * 
     * @type {Array<V1Agent>}
     * @memberof V1ListAgentsResponse
     */
    results?: Array<V1Agent>;
    /**
     * 
     * @type {string}
     * @memberof V1ListAgentsResponse
     */
    previous?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ListAgentsResponse
     */
    next?: string;
}

/**
 * Check if a given object implements the V1ListAgentsResponse interface.
 */
export function instanceOfV1ListAgentsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ListAgentsResponseFromJSON(json: any): V1ListAgentsResponse {
    return V1ListAgentsResponseFromJSONTyped(json, false);
}

export function V1ListAgentsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListAgentsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(V1AgentFromJSON)),
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'next': !exists(json, 'next') ? undefined : json['next'],
    };
}

export function V1ListAgentsResponseToJSON(value?: V1ListAgentsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(V1AgentToJSON)),
        'previous': value.previous,
        'next': value.next,
    };
}

