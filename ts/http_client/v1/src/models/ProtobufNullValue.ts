// Copyright 2018-2022 Polyaxon, Inc.
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
 * The version of the OpenAPI document: 1.21.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 * 
 *  The JSON representation for `NullValue` is JSON `null`.
 * 
 *  - NULL_VALUE: Null value.
 * @export
 * @enum {string}
 */
export enum ProtobufNullValue {
    NullValue = 'NULL_VALUE'
}

export function ProtobufNullValueFromJSON(json: any): ProtobufNullValue {
    return ProtobufNullValueFromJSONTyped(json, false);
}

export function ProtobufNullValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProtobufNullValue {
    return json as ProtobufNullValue;
}

export function ProtobufNullValueToJSON(value?: ProtobufNullValue | null): any {
    return value as any;
}

