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
import type { V1Tag } from './V1Tag';
import {
    V1TagFromJSON,
    V1TagFromJSONTyped,
    V1TagToJSON,
} from './V1Tag';

/**
 * 
 * @export
 * @interface V1ListTagsResponse
 */
export interface V1ListTagsResponse {
    /**
     * 
     * @type {number}
     * @memberof V1ListTagsResponse
     */
    count?: number;
    /**
     * 
     * @type {Array<V1Tag>}
     * @memberof V1ListTagsResponse
     */
    results?: Array<V1Tag>;
    /**
     * 
     * @type {string}
     * @memberof V1ListTagsResponse
     */
    previous?: string;
    /**
     * 
     * @type {string}
     * @memberof V1ListTagsResponse
     */
    next?: string;
}

/**
 * Check if a given object implements the V1ListTagsResponse interface.
 */
export function instanceOfV1ListTagsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ListTagsResponseFromJSON(json: any): V1ListTagsResponse {
    return V1ListTagsResponseFromJSONTyped(json, false);
}

export function V1ListTagsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListTagsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(V1TagFromJSON)),
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'next': !exists(json, 'next') ? undefined : json['next'],
    };
}

export function V1ListTagsResponseToJSON(value?: V1ListTagsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(V1TagToJSON)),
        'previous': value.previous,
        'next': value.next,
    };
}

