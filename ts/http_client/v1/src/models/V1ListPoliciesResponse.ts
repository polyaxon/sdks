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
import type { V1Policy } from './V1Policy';
import {
    V1PolicyFromJSON,
    V1PolicyFromJSONTyped,
    V1PolicyToJSON,
} from './V1Policy';

/**
 *
 * @export
 * @interface V1ListPoliciesResponse
 */
export interface V1ListPoliciesResponse {
    /**
     *
     * @type {number}
     * @memberof V1ListPoliciesResponse
     */
    count?: number;
    /**
     *
     * @type {Array<V1Policy>}
     * @memberof V1ListPoliciesResponse
     */
    results?: Array<V1Policy>;
    /**
     *
     * @type {string}
     * @memberof V1ListPoliciesResponse
     */
    previous?: string;
    /**
     *
     * @type {string}
     * @memberof V1ListPoliciesResponse
     */
    next?: string;
}

/**
 * Check if a given object implements the V1ListPoliciesResponse interface.
 */
export function instanceOfV1ListPoliciesResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ListPoliciesResponseFromJSON(json: any): V1ListPoliciesResponse {
    return V1ListPoliciesResponseFromJSONTyped(json, false);
}

export function V1ListPoliciesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListPoliciesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'count': !exists(json, 'count') ? undefined : json['count'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(V1PolicyFromJSON)),
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'next': !exists(json, 'next') ? undefined : json['next'],
    };
}

export function V1ListPoliciesResponseToJSON(value?: V1ListPoliciesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'count': value.count,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(V1PolicyToJSON)),
        'previous': value.previous,
        'next': value.next,
    };
}

