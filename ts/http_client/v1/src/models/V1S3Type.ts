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
 * The version of the OpenAPI document: 1.22.0
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
 * @interface V1S3Type
 */
export interface V1S3Type {
    /**
     * 
     * @type {string}
     * @memberof V1S3Type
     */
    bucket?: string;
    /**
     * 
     * @type {string}
     * @memberof V1S3Type
     */
    key?: string;
}

/**
 * Check if a given object implements the V1S3Type interface.
 */
export function instanceOfV1S3Type(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1S3TypeFromJSON(json: any): V1S3Type {
    return V1S3TypeFromJSONTyped(json, false);
}

export function V1S3TypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1S3Type {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bucket': !exists(json, 'bucket') ? undefined : json['bucket'],
        'key': !exists(json, 'key') ? undefined : json['key'],
    };
}

export function V1S3TypeToJSON(value?: V1S3Type | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bucket': value.bucket,
        'key': value.key,
    };
}

