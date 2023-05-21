/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 *
 *
 * The version of the OpenAPI document: 2.0.0-rc16
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1ArtifactKind } from './V1ArtifactKind';
import {
    V1ArtifactKindFromJSON,
    V1ArtifactKindFromJSONTyped,
    V1ArtifactKindToJSON,
} from './V1ArtifactKind';

/**
 *
 * @export
 * @interface V1EventArtifact
 */
export interface V1EventArtifact {
    /**
     *
     * @type {V1ArtifactKind}
     * @memberof V1EventArtifact
     */
    kind?: V1ArtifactKind;
    /**
     *
     * @type {string}
     * @memberof V1EventArtifact
     */
    path?: string;
}

/**
 * Check if a given object implements the V1EventArtifact interface.
 */
export function instanceOfV1EventArtifact(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1EventArtifactFromJSON(json: any): V1EventArtifact {
    return V1EventArtifactFromJSONTyped(json, false);
}

export function V1EventArtifactFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EventArtifact {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'kind': !exists(json, 'kind') ? undefined : V1ArtifactKindFromJSON(json['kind']),
        'path': !exists(json, 'path') ? undefined : json['path'],
    };
}

export function V1EventArtifactToJSON(value?: V1EventArtifact | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'kind': V1ArtifactKindToJSON(value.kind),
        'path': value.path,
    };
}

