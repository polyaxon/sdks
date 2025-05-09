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
 * @interface V1ArtifactTree
 */
export interface V1ArtifactTree {
    /**
     *
     * @type {{ [key: string]: number; }}
     * @memberof V1ArtifactTree
     */
    files?: { [key: string]: number; };
    /**
     *
     * @type {Array<string>}
     * @memberof V1ArtifactTree
     */
    dirs?: Array<string>;
    /**
     *
     * @type {boolean}
     * @memberof V1ArtifactTree
     */
    is_done?: boolean;
}

/**
 * Check if a given object implements the V1ArtifactTree interface.
 */
export function instanceOfV1ArtifactTree(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ArtifactTreeFromJSON(json: any): V1ArtifactTree {
    return V1ArtifactTreeFromJSONTyped(json, false);
}

export function V1ArtifactTreeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ArtifactTree {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'files': !exists(json, 'files') ? undefined : json['files'],
        'dirs': !exists(json, 'dirs') ? undefined : json['dirs'],
        'is_done': !exists(json, 'is_done') ? undefined : json['is_done'],
    };
}

export function V1ArtifactTreeToJSON(value?: V1ArtifactTree | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'files': value.files,
        'dirs': value.dirs,
        'is_done': value.is_done,
    };
}

