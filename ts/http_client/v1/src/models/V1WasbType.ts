/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.5.2
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
 * @interface V1WasbType
 */
export interface V1WasbType {
    /**
     *
     * @type {string}
     * @memberof V1WasbType
     */
    container?: string;
    /**
     *
     * @type {string}
     * @memberof V1WasbType
     */
    storageAccount?: string;
    /**
     *
     * @type {boolean}
     * @memberof V1WasbType
     */
    path?: boolean;
}

/**
 * Check if a given object implements the V1WasbType interface.
 */
export function instanceOfV1WasbType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1WasbTypeFromJSON(json: any): V1WasbType {
    return V1WasbTypeFromJSONTyped(json, false);
}

export function V1WasbTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1WasbType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'container': !exists(json, 'container') ? undefined : json['container'],
        'storageAccount': !exists(json, 'storageAccount') ? undefined : json['storageAccount'],
        'path': !exists(json, 'path') ? undefined : json['path'],
    };
}

export function V1WasbTypeToJSON(value?: V1WasbType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'container': value.container,
        'storageAccount': value.storageAccount,
        'path': value.path,
    };
}

