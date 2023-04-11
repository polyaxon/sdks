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


/**
 *
 * @export
 */
export const V1CloningKind = {
    Copy: 'copy',
    Restart: 'restart',
    Cache: 'cache'
} as const;
export type V1CloningKind = typeof V1CloningKind[keyof typeof V1CloningKind];


export function V1CloningKindFromJSON(json: any): V1CloningKind {
    return V1CloningKindFromJSONTyped(json, false);
}

export function V1CloningKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CloningKind {
    return json as V1CloningKind;
}

export function V1CloningKindToJSON(value?: V1CloningKind | null): any {
    return value as any;
}

