/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.6
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
 * @interface V1EntitiesTransfer
 */
export interface V1EntitiesTransfer {
    /**
     *
     * @type {Array<string>}
     * @memberof V1EntitiesTransfer
     */
    uuids?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof V1EntitiesTransfer
     */
    project?: string;
}

/**
 * Check if a given object implements the V1EntitiesTransfer interface.
 */
export function instanceOfV1EntitiesTransfer(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1EntitiesTransferFromJSON(json: any): V1EntitiesTransfer {
    return V1EntitiesTransferFromJSONTyped(json, false);
}

export function V1EntitiesTransferFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EntitiesTransfer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'uuids': !exists(json, 'uuids') ? undefined : json['uuids'],
        'project': !exists(json, 'project') ? undefined : json['project'],
    };
}

export function V1EntitiesTransferToJSON(value?: V1EntitiesTransfer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'uuids': value.uuids,
        'project': value.project,
    };
}

