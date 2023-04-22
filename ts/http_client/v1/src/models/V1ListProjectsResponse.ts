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
 * The version of the OpenAPI document: 2.0.0-rc11
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1Project } from './V1Project';
import {
    V1ProjectFromJSON,
    V1ProjectFromJSONTyped,
    V1ProjectToJSON,
} from './V1Project';

/**
 *
 * @export
 * @interface V1ListProjectsResponse
 */
export interface V1ListProjectsResponse {
    /**
     *
     * @type {number}
     * @memberof V1ListProjectsResponse
     */
    count?: number;
    /**
     *
     * @type {Array<V1Project>}
     * @memberof V1ListProjectsResponse
     */
    results?: Array<V1Project>;
    /**
     *
     * @type {string}
     * @memberof V1ListProjectsResponse
     */
    previous?: string;
    /**
     *
     * @type {string}
     * @memberof V1ListProjectsResponse
     */
    next?: string;
}

/**
 * Check if a given object implements the V1ListProjectsResponse interface.
 */
export function instanceOfV1ListProjectsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1ListProjectsResponseFromJSON(json: any): V1ListProjectsResponse {
    return V1ListProjectsResponseFromJSONTyped(json, false);
}

export function V1ListProjectsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ListProjectsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'count': !exists(json, 'count') ? undefined : json['count'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(V1ProjectFromJSON)),
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'next': !exists(json, 'next') ? undefined : json['next'],
    };
}

export function V1ListProjectsResponseToJSON(value?: V1ListProjectsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'count': value.count,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(V1ProjectToJSON)),
        'previous': value.previous,
        'next': value.next,
    };
}

