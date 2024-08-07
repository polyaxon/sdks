/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.3.2
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
 * @interface V1UserAccess
 */
export interface V1UserAccess {
    /**
     *
     * @type {string}
     * @memberof V1UserAccess
     */
    user?: string;
    /**
     *
     * @type {string}
     * @memberof V1UserAccess
     */
    queue?: string;
    /**
     *
     * @type {string}
     * @memberof V1UserAccess
     */
    preset?: string;
    /**
     *
     * @type {string}
     * @memberof V1UserAccess
     */
    namespace?: string;
}

/**
 * Check if a given object implements the V1UserAccess interface.
 */
export function instanceOfV1UserAccess(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1UserAccessFromJSON(json: any): V1UserAccess {
    return V1UserAccessFromJSONTyped(json, false);
}

export function V1UserAccessFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UserAccess {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'user': !exists(json, 'user') ? undefined : json['user'],
        'queue': !exists(json, 'queue') ? undefined : json['queue'],
        'preset': !exists(json, 'preset') ? undefined : json['preset'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
    };
}

export function V1UserAccessToJSON(value?: V1UserAccess | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'user': value.user,
        'queue': value.queue,
        'preset': value.preset,
        'namespace': value.namespace,
    };
}

