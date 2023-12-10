/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.6-rc6
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1RunConnection } from './V1RunConnection';
import {
    V1RunConnectionFromJSON,
    V1RunConnectionFromJSONTyped,
    V1RunConnectionToJSON,
} from './V1RunConnection';

/**
 *
 * @export
 * @interface V1ListRunConnectionsResponse
 */
export interface V1ListRunConnectionsResponse {
    /**
     *
     * @type {number}
     * @memberof V1ListRunConnectionsResponse
     */
    count?: number;
    /**
     *
     * @type {Array<V1RunConnection>}
     * @memberof V1ListRunConnectionsResponse
     */
    results?: Array<V1RunConnection>;
    /**
     *
     * @type {string}
     * @memberof V1ListRunConnectionsResponse
     */
    previous?: string;
    /**
     *
     * @type {string}
     * @memberof V1ListRunConnectionsResponse
     */
    next?: string;
}

/**
 * Check if a given object implements the V1ListRunConnectionsResponse interface.
 */
export function instanceOfV1ListRunConnectionsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ListRunConnectionsResponseFromJSON(json: any): V1ListRunConnectionsResponse {
    return V1ListRunConnectionsResponseFromJSONTyped(json, false);
}

export function V1ListRunConnectionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListRunConnectionsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'count': !exists(json, 'count') ? undefined : json['count'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(V1RunConnectionFromJSON)),
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'next': !exists(json, 'next') ? undefined : json['next'],
    };
}

export function V1ListRunConnectionsResponseToJSON(value?: V1ListRunConnectionsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'count': value.count,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(V1RunConnectionToJSON)),
        'previous': value.previous,
        'next': value.next,
    };
}

