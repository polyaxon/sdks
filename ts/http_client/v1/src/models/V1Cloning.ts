/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.1.0-rc16
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1CloningKind } from './V1CloningKind';
import {
    V1CloningKindFromJSON,
    V1CloningKindFromJSONTyped,
    V1CloningKindToJSON,
} from './V1CloningKind';

/**
 *
 * @export
 * @interface V1Cloning
 */
export interface V1Cloning {
    /**
     *
     * @type {string}
     * @memberof V1Cloning
     */
    uuid?: string;
    /**
     *
     * @type {string}
     * @memberof V1Cloning
     */
    name?: string;
    /**
     *
     * @type {V1CloningKind}
     * @memberof V1Cloning
     */
    kind?: V1CloningKind;
}

/**
 * Check if a given object implements the V1Cloning interface.
 */
export function instanceOfV1Cloning(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1CloningFromJSON(json: any): V1Cloning {
    return V1CloningFromJSONTyped(json, false);
}

export function V1CloningFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Cloning {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'kind': !exists(json, 'kind') ? undefined : V1CloningKindFromJSON(json['kind']),
    };
}

export function V1CloningToJSON(value?: V1Cloning | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'uuid': value.uuid,
        'name': value.name,
        'kind': V1CloningKindToJSON(value.kind),
    };
}

