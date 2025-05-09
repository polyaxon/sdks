/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.8.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1ConnectionResponse } from './V1ConnectionResponse';
import {
    V1ConnectionResponseFromJSON,
    V1ConnectionResponseFromJSONTyped,
    V1ConnectionResponseToJSON,
} from './V1ConnectionResponse';

/**
 *
 * @export
 * @interface V1ListConnectionsResponse
 */
export interface V1ListConnectionsResponse {
    /**
     *
     * @type {number}
     * @memberof V1ListConnectionsResponse
     */
    count?: number;
    /**
     *
     * @type {Array<V1ConnectionResponse>}
     * @memberof V1ListConnectionsResponse
     */
    results?: Array<V1ConnectionResponse>;
    /**
     *
     * @type {string}
     * @memberof V1ListConnectionsResponse
     */
    previous?: string;
    /**
     *
     * @type {string}
     * @memberof V1ListConnectionsResponse
     */
    next?: string;
}

/**
 * Check if a given object implements the V1ListConnectionsResponse interface.
 */
export function instanceOfV1ListConnectionsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ListConnectionsResponseFromJSON(json: any): V1ListConnectionsResponse {
    return V1ListConnectionsResponseFromJSONTyped(json, false);
}

export function V1ListConnectionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListConnectionsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'count': !exists(json, 'count') ? undefined : json['count'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(V1ConnectionResponseFromJSON)),
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'next': !exists(json, 'next') ? undefined : json['next'],
    };
}

export function V1ListConnectionsResponseToJSON(value?: V1ListConnectionsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'count': value.count,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(V1ConnectionResponseToJSON)),
        'previous': value.previous,
        'next': value.next,
    };
}

