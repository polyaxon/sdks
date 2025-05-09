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
 * @interface V1EventConfusionMatrix
 */
export interface V1EventConfusionMatrix {
    /**
     *
     * @type {Array<object>}
     * @memberof V1EventConfusionMatrix
     */
    x?: Array<object>;
    /**
     *
     * @type {Array<object>}
     * @memberof V1EventConfusionMatrix
     */
    y?: Array<object>;
    /**
     *
     * @type {Array<object>}
     * @memberof V1EventConfusionMatrix
     */
    z?: Array<object>;
}

/**
 * Check if a given object implements the V1EventConfusionMatrix interface.
 */
export function instanceOfV1EventConfusionMatrix(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1EventConfusionMatrixFromJSON(json: any): V1EventConfusionMatrix {
    return V1EventConfusionMatrixFromJSONTyped(json, false);
}

export function V1EventConfusionMatrixFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EventConfusionMatrix {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'x': !exists(json, 'x') ? undefined : json['x'],
        'y': !exists(json, 'y') ? undefined : json['y'],
        'z': !exists(json, 'z') ? undefined : json['z'],
    };
}

export function V1EventConfusionMatrixToJSON(value?: V1EventConfusionMatrix | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'x': value.x,
        'y': value.y,
        'z': value.z,
    };
}

