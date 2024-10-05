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
 * @interface V1HpGeomSpace
 */
export interface V1HpGeomSpace {
    /**
     *
     * @type {string}
     * @memberof V1HpGeomSpace
     */
    kind?: string;
    /**
     *
     * @type {object}
     * @memberof V1HpGeomSpace
     */
    value?: object;
}

/**
 * Check if a given object implements the V1HpGeomSpace interface.
 */
export function instanceOfV1HpGeomSpace(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1HpGeomSpaceFromJSON(json: any): V1HpGeomSpace {
    return V1HpGeomSpaceFromJSONTyped(json, false);
}

export function V1HpGeomSpaceFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HpGeomSpace {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function V1HpGeomSpaceToJSON(value?: V1HpGeomSpace | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'kind': value.kind,
        'value': value.value,
    };
}

