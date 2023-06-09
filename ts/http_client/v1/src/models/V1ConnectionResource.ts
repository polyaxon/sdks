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
 * @interface V1ConnectionResource
 */
export interface V1ConnectionResource {
    /**
     *
     * @type {string}
     * @memberof V1ConnectionResource
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof V1ConnectionResource
     */
    mountPath?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof V1ConnectionResource
     */
    items?: Array<string>;
    /**
     *
     * @type {number}
     * @memberof V1ConnectionResource
     */
    defaultMode?: number;
}

/**
 * Check if a given object implements the V1ConnectionResource interface.
 */
export function instanceOfV1ConnectionResource(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ConnectionResourceFromJSON(json: any): V1ConnectionResource {
    return V1ConnectionResourceFromJSONTyped(json, false);
}

export function V1ConnectionResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ConnectionResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'name': !exists(json, 'name') ? undefined : json['name'],
        'mountPath': !exists(json, 'mountPath') ? undefined : json['mountPath'],
        'items': !exists(json, 'items') ? undefined : json['items'],
        'defaultMode': !exists(json, 'defaultMode') ? undefined : json['defaultMode'],
    };
}

export function V1ConnectionResourceToJSON(value?: V1ConnectionResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'name': value.name,
        'mountPath': value.mountPath,
        'items': value.items,
        'defaultMode': value.defaultMode,
    };
}

