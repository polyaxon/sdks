/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc18
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
 * @interface V1DagRef
 */
export interface V1DagRef {
    /**
     *
     * @type {string}
     * @memberof V1DagRef
     */
    kind?: string;
    /**
     *
     * @type {string}
     * @memberof V1DagRef
     */
    name?: string;
}

/**
 * Check if a given object implements the V1DagRef interface.
 */
export function instanceOfV1DagRef(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1DagRefFromJSON(json: any): V1DagRef {
    return V1DagRefFromJSONTyped(json, false);
}

export function V1DagRefFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DagRef {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function V1DagRefToJSON(value?: V1DagRef | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'kind': value.kind,
        'name': value.name,
    };
}

