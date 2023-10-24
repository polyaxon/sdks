/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc54
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
 * @interface V1FileType
 */
export interface V1FileType {
    /**
     *
     * @type {string}
     * @memberof V1FileType
     */
    content?: string;
    /**
     *
     * @type {string}
     * @memberof V1FileType
     */
    filename?: string;
    /**
     *
     * @type {string}
     * @memberof V1FileType
     */
    chmod?: string;
    /**
     *
     * @type {string}
     * @memberof V1FileType
     */
    kind?: string;
}

/**
 * Check if a given object implements the V1FileType interface.
 */
export function instanceOfV1FileType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1FileTypeFromJSON(json: any): V1FileType {
    return V1FileTypeFromJSONTyped(json, false);
}

export function V1FileTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1FileType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'content': !exists(json, 'content') ? undefined : json['content'],
        'filename': !exists(json, 'filename') ? undefined : json['filename'],
        'chmod': !exists(json, 'chmod') ? undefined : json['chmod'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
    };
}

export function V1FileTypeToJSON(value?: V1FileType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'content': value.content,
        'filename': value.filename,
        'chmod': value.chmod,
        'kind': value.kind,
    };
}

