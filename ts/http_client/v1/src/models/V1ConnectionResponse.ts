// Copyright 2018-2023 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* tslint:disable */
/* eslint-disable */
/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 2.0.0-rc6
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1ConnectionKind } from './V1ConnectionKind';
import {
    V1ConnectionKindFromJSON,
    V1ConnectionKindFromJSONTyped,
    V1ConnectionKindToJSON,
} from './V1ConnectionKind';

/**
 *
 * @export
 * @interface V1ConnectionResponse
 */
export interface V1ConnectionResponse {
    /**
     *
     * @type {string}
     * @memberof V1ConnectionResponse
     */
    uuid?: string;
    /**
     *
     * @type {string}
     * @memberof V1ConnectionResponse
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof V1ConnectionResponse
     */
    agent?: string;
    /**
     *
     * @type {string}
     * @memberof V1ConnectionResponse
     */
    description?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof V1ConnectionResponse
     */
    tags?: Array<string>;
    /**
     *
     * @type {Date}
     * @memberof V1ConnectionResponse
     */
    created_at?: Date;
    /**
     *
     * @type {Date}
     * @memberof V1ConnectionResponse
     */
    updated_at?: Date;
    /**
     *
     * @type {number}
     * @memberof V1ConnectionResponse
     */
    live_state?: number;
    /**
     *
     * @type {V1ConnectionKind}
     * @memberof V1ConnectionResponse
     */
    kind?: V1ConnectionKind;
}

/**
 * Check if a given object implements the V1ConnectionResponse interface.
 */
export function instanceOfV1ConnectionResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ConnectionResponseFromJSON(json: any): V1ConnectionResponse {
    return V1ConnectionResponseFromJSONTyped(json, false);
}

export function V1ConnectionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ConnectionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'agent': !exists(json, 'agent') ? undefined : json['agent'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'live_state': !exists(json, 'live_state') ? undefined : json['live_state'],
        'kind': !exists(json, 'kind') ? undefined : V1ConnectionKindFromJSON(json['kind']),
    };
}

export function V1ConnectionResponseToJSON(value?: V1ConnectionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'uuid': value.uuid,
        'name': value.name,
        'agent': value.agent,
        'description': value.description,
        'tags': value.tags,
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'updated_at': value.updated_at === undefined ? undefined : (value.updated_at.toISOString()),
        'live_state': value.live_state,
        'kind': V1ConnectionKindToJSON(value.kind),
    };
}

