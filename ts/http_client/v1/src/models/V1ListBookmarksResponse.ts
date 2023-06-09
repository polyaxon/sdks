/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc17
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface V1ListBookmarksResponse
 */
export interface V1ListBookmarksResponse {
    /**
     *
     * @type {number}
     * @memberof V1ListBookmarksResponse
     */
    count?: number;
    /**
     *
     * @type {Array<object>}
     * @memberof V1ListBookmarksResponse
     */
    results?: Array<object>;
    /**
     *
     * @type {string}
     * @memberof V1ListBookmarksResponse
     */
    previous?: string;
    /**
     *
     * @type {string}
     * @memberof V1ListBookmarksResponse
     */
    next?: string;
}

/**
 * Check if a given object implements the V1ListBookmarksResponse interface.
 */
export function instanceOfV1ListBookmarksResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ListBookmarksResponseFromJSON(json: any): V1ListBookmarksResponse {
    return V1ListBookmarksResponseFromJSONTyped(json, false);
}

export function V1ListBookmarksResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListBookmarksResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'count': !exists(json, 'count') ? undefined : json['count'],
        'results': !exists(json, 'results') ? undefined : json['results'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'next': !exists(json, 'next') ? undefined : json['next'],
    };
}

export function V1ListBookmarksResponseToJSON(value?: V1ListBookmarksResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'count': value.count,
        'results': value.results,
        'previous': value.previous,
        'next': value.next,
    };
}

