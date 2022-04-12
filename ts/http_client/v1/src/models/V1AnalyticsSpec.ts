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
 * The version of the OpenAPI document: 1.17.1
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
 * @interface V1AnalyticsSpec
 */
export interface V1AnalyticsSpec {
    /**
     * 
     * @type {string}
     * @memberof V1AnalyticsSpec
     */
    view?: string;
    /**
     * 
     * @type {string}
     * @memberof V1AnalyticsSpec
     */
    trunc?: string;
    /**
     * 
     * @type {string}
     * @memberof V1AnalyticsSpec
     */
    groupby?: string;
    /**
     * 
     * @type {string}
     * @memberof V1AnalyticsSpec
     */
    frequency?: string;
}

export function V1AnalyticsSpecFromJSON(json: any): V1AnalyticsSpec {
    return V1AnalyticsSpecFromJSONTyped(json, false);
}

export function V1AnalyticsSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1AnalyticsSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'view': !exists(json, 'view') ? undefined : json['view'],
        'trunc': !exists(json, 'trunc') ? undefined : json['trunc'],
        'groupby': !exists(json, 'groupby') ? undefined : json['groupby'],
        'frequency': !exists(json, 'frequency') ? undefined : json['frequency'],
    };
}

export function V1AnalyticsSpecToJSON(value?: V1AnalyticsSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'view': value.view,
        'trunc': value.trunc,
        'groupby': value.groupby,
        'frequency': value.frequency,
    };
}

