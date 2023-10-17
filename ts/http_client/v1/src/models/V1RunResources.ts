/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc51
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
 * @interface V1RunResources
 */
export interface V1RunResources {
    /**
     *
     * @type {number}
     * @memberof V1RunResources
     */
    cpu?: number;
    /**
     *
     * @type {number}
     * @memberof V1RunResources
     */
    memory?: number;
    /**
     *
     * @type {number}
     * @memberof V1RunResources
     */
    gpu?: number;
    /**
     *
     * @type {number}
     * @memberof V1RunResources
     */
    custom?: number;
    /**
     *
     * @type {number}
     * @memberof V1RunResources
     */
    cost?: number;
}

/**
 * Check if a given object implements the V1RunResources interface.
 */
export function instanceOfV1RunResources(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1RunResourcesFromJSON(json: any): V1RunResources {
    return V1RunResourcesFromJSONTyped(json, false);
}

export function V1RunResourcesFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1RunResources {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'cpu': !exists(json, 'cpu') ? undefined : json['cpu'],
        'memory': !exists(json, 'memory') ? undefined : json['memory'],
        'gpu': !exists(json, 'gpu') ? undefined : json['gpu'],
        'custom': !exists(json, 'custom') ? undefined : json['custom'],
        'cost': !exists(json, 'cost') ? undefined : json['cost'],
    };
}

export function V1RunResourcesToJSON(value?: V1RunResources | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'cpu': value.cpu,
        'memory': value.memory,
        'gpu': value.gpu,
        'custom': value.custom,
        'cost': value.cost,
    };
}

