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
/**
 *
 * @export
 * @interface V1UriType
 */
export interface V1UriType {
    /**
     *
     * @type {string}
     * @memberof V1UriType
     */
    user?: string;
    /**
     *
     * @type {string}
     * @memberof V1UriType
     */
    password?: string;
    /**
     *
     * @type {boolean}
     * @memberof V1UriType
     */
    host?: boolean;
}

/**
 * Check if a given object implements the V1UriType interface.
 */
export function instanceOfV1UriType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1UriTypeFromJSON(json: any): V1UriType {
    return V1UriTypeFromJSONTyped(json, false);
}

export function V1UriTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UriType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'user': !exists(json, 'user') ? undefined : json['user'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'host': !exists(json, 'host') ? undefined : json['host'],
    };
}

export function V1UriTypeToJSON(value?: V1UriType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'user': value.user,
        'password': value.password,
        'host': value.host,
    };
}

