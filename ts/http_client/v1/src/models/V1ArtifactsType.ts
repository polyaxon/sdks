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
 * @interface V1ArtifactsType
 */
export interface V1ArtifactsType {
    /**
     *
     * @type {Array<object>}
     * @memberof V1ArtifactsType
     */
    files?: Array<object>;
    /**
     *
     * @type {Array<object>}
     * @memberof V1ArtifactsType
     */
    dirs?: Array<object>;
    /**
     *
     * @type {number}
     * @memberof V1ArtifactsType
     */
    workers?: number;
}

/**
 * Check if a given object implements the V1ArtifactsType interface.
 */
export function instanceOfV1ArtifactsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ArtifactsTypeFromJSON(json: any): V1ArtifactsType {
    return V1ArtifactsTypeFromJSONTyped(json, false);
}

export function V1ArtifactsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ArtifactsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'files': !exists(json, 'files') ? undefined : json['files'],
        'dirs': !exists(json, 'dirs') ? undefined : json['dirs'],
        'workers': !exists(json, 'workers') ? undefined : json['workers'],
    };
}

export function V1ArtifactsTypeToJSON(value?: V1ArtifactsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'files': value.files,
        'dirs': value.dirs,
        'workers': value.workers,
    };
}

