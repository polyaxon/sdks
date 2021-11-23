// Copyright 2018-2021 Polyaxon, Inc.
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
 * The version of the OpenAPI document: 1.13.0-rc3
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * - any: Any view
 *  - runs: Runs view
 *  - analytics: Analytics view
 *  - projects: Projects view
 * @export
 * @enum {string}
 */
export enum SearchView {
    Any = 'any',
    Runs = 'runs',
    Analytics = 'analytics',
    Projects = 'projects'
}

export function SearchViewFromJSON(json: any): SearchView {
    return SearchViewFromJSONTyped(json, false);
}

export function SearchViewFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchView {
    return json as SearchView;
}

export function SearchViewToJSON(value?: SearchView | null): any {
    return value as any;
}

