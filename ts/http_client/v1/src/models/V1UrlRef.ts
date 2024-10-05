/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.5.0
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
 * @interface V1UrlRef
 */
export interface V1UrlRef {
    /**
     *
     * @type {string}
     * @memberof V1UrlRef
     */
    kind?: string;
    /**
     *
     * @type {string}
     * @memberof V1UrlRef
     */
    url?: string;
}

/**
 * Check if a given object implements the V1UrlRef interface.
 */
export function instanceOfV1UrlRef(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1UrlRefFromJSON(json: any): V1UrlRef {
    return V1UrlRefFromJSONTyped(json, false);
}

export function V1UrlRefFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UrlRef {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function V1UrlRefToJSON(value?: V1UrlRef | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'kind': value.kind,
        'url': value.url,
    };
}

