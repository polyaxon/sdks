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
import type { V1PipelineKind } from './V1PipelineKind';
import {
    V1PipelineKindFromJSON,
    V1PipelineKindFromJSONTyped,
    V1PipelineKindToJSON,
} from './V1PipelineKind';

/**
 *
 * @export
 * @interface V1Pipeline
 */
export interface V1Pipeline {
    /**
     *
     * @type {string}
     * @memberof V1Pipeline
     */
    uuid?: string;
    /**
     *
     * @type {string}
     * @memberof V1Pipeline
     */
    name?: string;
    /**
     *
     * @type {V1PipelineKind}
     * @memberof V1Pipeline
     */
    kind?: V1PipelineKind;
}

/**
 * Check if a given object implements the V1Pipeline interface.
 */
export function instanceOfV1Pipeline(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1PipelineFromJSON(json: any): V1Pipeline {
    return V1PipelineFromJSONTyped(json, false);
}

export function V1PipelineFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Pipeline {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'kind': !exists(json, 'kind') ? undefined : V1PipelineKindFromJSON(json['kind']),
    };
}

export function V1PipelineToJSON(value?: V1Pipeline | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'uuid': value.uuid,
        'name': value.name,
        'kind': V1PipelineKindToJSON(value.kind),
    };
}

