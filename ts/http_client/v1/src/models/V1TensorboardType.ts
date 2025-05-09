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
/**
 *
 * @export
 * @interface V1TensorboardType
 */
export interface V1TensorboardType {
    /**
     *
     * @type {number}
     * @memberof V1TensorboardType
     */
    port?: number;
    /**
     *
     * @type {Array<string>}
     * @memberof V1TensorboardType
     */
    uuids?: Array<string>;
    /**
     *
     * @type {boolean}
     * @memberof V1TensorboardType
     */
    use_names?: boolean;
    /**
     *
     * @type {string}
     * @memberof V1TensorboardType
     */
    path_prefix?: string;
    /**
     *
     * @type {string}
     * @memberof V1TensorboardType
     */
    plugins?: string;
}

/**
 * Check if a given object implements the V1TensorboardType interface.
 */
export function instanceOfV1TensorboardType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1TensorboardTypeFromJSON(json: any): V1TensorboardType {
    return V1TensorboardTypeFromJSONTyped(json, false);
}

export function V1TensorboardTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1TensorboardType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'port': !exists(json, 'port') ? undefined : json['port'],
        'uuids': !exists(json, 'uuids') ? undefined : json['uuids'],
        'use_names': !exists(json, 'use_names') ? undefined : json['use_names'],
        'path_prefix': !exists(json, 'path_prefix') ? undefined : json['path_prefix'],
        'plugins': !exists(json, 'plugins') ? undefined : json['plugins'],
    };
}

export function V1TensorboardTypeToJSON(value?: V1TensorboardType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'port': value.port,
        'uuids': value.uuids,
        'use_names': value.use_names,
        'path_prefix': value.path_prefix,
        'plugins': value.plugins,
    };
}

