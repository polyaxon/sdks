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
 * The version of the OpenAPI document: 2.0.0-rc3
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
 * @interface V1PathRef
 */
export interface V1PathRef {
    /**
     * 
     * @type {string}
     * @memberof V1PathRef
     */
    kind?: string;
    /**
     * 
     * @type {string}
     * @memberof V1PathRef
     */
    path?: string;
}

/**
 * Check if a given object implements the V1PathRef interface.
 */
export function instanceOfV1PathRef(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1PathRefFromJSON(json: any): V1PathRef {
    return V1PathRefFromJSONTyped(json, false);
}

export function V1PathRefFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1PathRef {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'path': !exists(json, 'path') ? undefined : json['path'],
    };
}

export function V1PathRefToJSON(value?: V1PathRef | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kind': value.kind,
        'path': value.path,
    };
}

