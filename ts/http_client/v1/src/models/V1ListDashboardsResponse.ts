/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc20
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1Dashboard } from './V1Dashboard';
import {
    V1DashboardFromJSON,
    V1DashboardFromJSONTyped,
    V1DashboardToJSON,
} from './V1Dashboard';

/**
 *
 * @export
 * @interface V1ListDashboardsResponse
 */
export interface V1ListDashboardsResponse {
    /**
     *
     * @type {number}
     * @memberof V1ListDashboardsResponse
     */
    count?: number;
    /**
     *
     * @type {Array<V1Dashboard>}
     * @memberof V1ListDashboardsResponse
     */
    results?: Array<V1Dashboard>;
    /**
     *
     * @type {string}
     * @memberof V1ListDashboardsResponse
     */
    previous?: string;
    /**
     *
     * @type {string}
     * @memberof V1ListDashboardsResponse
     */
    next?: string;
}

/**
 * Check if a given object implements the V1ListDashboardsResponse interface.
 */
export function instanceOfV1ListDashboardsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ListDashboardsResponseFromJSON(json: any): V1ListDashboardsResponse {
    return V1ListDashboardsResponseFromJSONTyped(json, false);
}

export function V1ListDashboardsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListDashboardsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'count': !exists(json, 'count') ? undefined : json['count'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(V1DashboardFromJSON)),
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'next': !exists(json, 'next') ? undefined : json['next'],
    };
}

export function V1ListDashboardsResponseToJSON(value?: V1ListDashboardsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'count': value.count,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(V1DashboardToJSON)),
        'previous': value.previous,
        'next': value.next,
    };
}

